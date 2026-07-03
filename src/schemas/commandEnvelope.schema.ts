export type CommandEnvelope = {
  id: string;
  command: string;
  version: string;
  issuedAt: string;
  requestedBy: string;
  payload?: Record<string, unknown>;
};

export const commandEnvelopeSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "otto://schemas/command-envelope",
  type: "object",
  additionalProperties: false,
  required: ["id", "command", "version", "issuedAt", "requestedBy"],
  properties: {
    id: { type: "string", minLength: 1 },
    command: { type: "string", minLength: 1 },
    version: { type: "string", minLength: 1 },
    issuedAt: { type: "string", format: "date-time" },
    requestedBy: { type: "string", minLength: 1 },
    payload: {
      type: "object",
      additionalProperties: true
    }
  }
} as const;
