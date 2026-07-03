import { describe, expect, it } from "vitest";

import {
  commandEnvelopeSchema,
  createCommandEnvelope,
  createModuleManifest,
  createUpdateManifest,
  moduleManifestSchema,
  updateManifestSchema
} from "../src/index.js";

describe("protocol schemas and test factories", () => {
  it("exposes required fields for command envelope", () => {
    expect(commandEnvelopeSchema.required).toContain("command");
    expect(commandEnvelopeSchema.required).toContain("requestedBy");
  });

  it("exposes required fields for update and module manifests", () => {
    expect(updateManifestSchema.required).toContain("targetVersion");
    expect(moduleManifestSchema.required).toContain("entrypoint");
  });

  it("creates valid default test fixtures", () => {
    expect(createCommandEnvelope().command).toBeTruthy();
    expect(createUpdateManifest().product).toBe("otto-system");
    expect(createModuleManifest().id).toBe("core.shell");
  });
});
