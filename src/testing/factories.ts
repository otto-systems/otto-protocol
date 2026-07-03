import type { CommandEnvelope, ModuleManifest, UpdateManifest } from "../index.js";

export function createCommandEnvelope(overrides: Partial<CommandEnvelope> = {}): CommandEnvelope {
  return {
    id: "cmd-1",
    command: "kernel.reload",
    version: "1",
    issuedAt: "2026-07-03T00:00:00Z",
    requestedBy: "tester",
    payload: {},
    ...overrides
  };
}

export function createUpdateManifest(overrides: Partial<UpdateManifest> = {}): UpdateManifest {
  return {
    product: "otto-system",
    currentVersion: "0.2.1",
    targetVersion: "0.2.1",
    channel: "stable",
    publishedAt: "2026-07-03T00:00:00Z",
    artifacts: [],
    ...overrides
  };
}

export function createModuleManifest(overrides: Partial<ModuleManifest> = {}): ModuleManifest {
  return {
    id: "core.shell",
    name: "Core Shell",
    version: "0.2.1",
    entrypoint: "./index.js",
    permissions: [],
    ...overrides
  };
}
