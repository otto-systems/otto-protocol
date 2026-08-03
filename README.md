# otto-protocol

Shared protocol package for the Otto ecosystem.

## What this repo does

This repo defines the canonical data contracts that Otto services agree on:

- Command envelope schema
- Update manifest schema
- Module manifest schema
- Test data factories for protocol-driven tests

If two Otto repos exchange structured data, this package is the source of truth for that shape.

## Exports

- src/schemas/commandEnvelope.schema.ts
- src/schemas/updateManifest.schema.ts
- src/schemas/moduleManifest.schema.ts
- src/testing/factories.ts

## Quick start

```bash
npm install
npm run typecheck
npm run test
npm run build
```

## Why it matters

Keeping protocol definitions centralized prevents contract drift between kernel, update, server, extensions, and UI layers.
