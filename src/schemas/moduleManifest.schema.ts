export type ModuleManifest = {
  id: string;
  name: string;
  version: string;
  entrypoint: string;
  description?: string;
  permissions?: string[];
};

export const moduleManifestSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "otto://schemas/module-manifest",
  type: "object",
  additionalProperties: false,
  required: ["id", "name", "version", "entrypoint"],
  properties: {
    id: { type: "string", minLength: 1 },
    name: { type: "string", minLength: 1 },
    version: { type: "string", minLength: 1 },
    entrypoint: { type: "string", minLength: 1 },
    description: { type: "string", minLength: 1 },
    permissions: {
      type: "array",
      items: { type: "string", minLength: 1 }
    }
  }
} as const;
