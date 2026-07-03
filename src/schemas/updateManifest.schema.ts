export type UpdateManifest = {
  product: string;
  currentVersion: string;
  targetVersion: string;
  channel: string;
  publishedAt: string;
  artifacts?: Array<{
    name: string;
    url: string;
    checksum?: string;
  }>;
};

export const updateManifestSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "otto://schemas/update-manifest",
  type: "object",
  additionalProperties: false,
  required: ["product", "currentVersion", "targetVersion", "channel", "publishedAt"],
  properties: {
    product: { type: "string", minLength: 1 },
    currentVersion: { type: "string", minLength: 1 },
    targetVersion: { type: "string", minLength: 1 },
    channel: { type: "string", minLength: 1 },
    publishedAt: { type: "string", format: "date-time" },
    artifacts: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "url"],
        properties: {
          name: { type: "string", minLength: 1 },
          url: { type: "string", minLength: 1 },
          checksum: { type: "string", minLength: 1 }
        }
      }
    }
  }
} as const;
