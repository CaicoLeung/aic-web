/**
 * Fixture tests for the build-time Rust-source parsers (src/data/aic.ts).
 *
 * The parsers regex-read Cargo.toml and src/llm.rs from the aic source repo
 * at build time (ADR-0003). An upstream refactor can silently break them,
 * and a miss degrades the site to fallback facts in production — these
 * fixtures pin the parsing contracts against realistic source excerpts so
 * breakage surfaces in `pnpm test`, not in a shipped deploy.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { parseProviders, parseVersion } from '../src/data/aic.ts';

const CARGO_TOML = `[package]
name = "aic"
version = "0.3.1"
edition = "2021"

[dependencies]
# Inline version keys are not line-initial, so they can never win.
tokio = { version = "1", features = ["full"] }
`;

const LLM_RS = `use crate::config::Config;

#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum Provider {
    /// Anthropic — first-party.
    Anthropic,
    OpenAi,
    #[cfg(feature = "xai")]
    Xai,
    DeepSeek,
    OpenAiCompatible,
}

impl Provider {
    pub fn default_model(self) -> &'static str {
        match self {
            Self::Anthropic => "claude-sonnet-4-5",
            Self::OpenAi => "gpt-5.2",
            Self::Xai => "grok-4",
            Self::OpenAiCompatible => "openai/gpt-4o-mini",
        }
    }
}
`;

describe('parseVersion', () => {
  it('extracts the crate version from the first line-initial `version =`', () => {
    assert.equal(parseVersion(CARGO_TOML), '0.3.1');
  });

  it('takes the first version line even when a later table also declares one', () => {
    const toml = `[package]
version = "0.4.0"

[workspace.package]
version = "2.0.0"
`;
    assert.equal(parseVersion(toml), '0.4.0');
  });

  it('returns null when no version line exists', () => {
    assert.equal(parseVersion('[package]\nname = "aic"\n'), null);
  });
});

describe('parseProviders', () => {
  it('parses variants in declaration order with live models, display names, and doc-comment dedupe', () => {
    assert.deepEqual(parseProviders(LLM_RS), [
      { id: 'anthropic', name: 'Anthropic', defaultModel: 'claude-sonnet-4-5' },
      { id: 'openai', name: 'OpenAi', defaultModel: 'gpt-5.2' },
      { id: 'xai', name: 'xAI', defaultModel: 'grok-4' },
      // No match arm for DeepSeek → the FALLBACK_PROVIDERS model fills in.
      { id: 'deepseek', name: 'DeepSeek', defaultModel: 'deepseek-v4-flash' },
      // Rust idents can't hold a hyphen; the display map fixes the casing.
      {
        id: 'openaicompatible',
        name: 'OpenAI-compatible',
        defaultModel: 'openai/gpt-4o-mini',
      },
    ]);
  });

  it('fills unmatched providers from FALLBACK_PROVIDERS and omits defaultModel when neither exists', () => {
    const rs = `pub enum Provider {
    Anthropic,
    OpenAi,
    OpenRouter,
}

pub fn other() {}
`;
    // Anthropic/OpenAi have no match arm here but do have fallback entries;
    // OpenRouter has neither (it routes to many vendors — no single default).
    assert.deepEqual(parseProviders(rs), [
      { id: 'anthropic', name: 'Anthropic', defaultModel: 'claude-haiku-4-5' },
      { id: 'openai', name: 'OpenAi', defaultModel: 'gpt-5-mini' },
      { id: 'openrouter', name: 'OpenRouter' },
    ]);
  });

  it('returns null when the enum is missing (fetch returned the wrong body)', () => {
    assert.equal(parseProviders('<html>rate limited</html>'), null);
  });

  it('returns null on a truncated enum — fewer than 3 variants is not a real provider list', () => {
    assert.equal(
      parseProviders('pub enum Provider {\n    Anthropic,\n    OpenAi,\n}\n'),
      null,
    );
  });
});
