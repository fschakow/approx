# Approx Landing Page

Cinematic React landing page for Approx.

## Baseline Requirements

- Node.js `22.x` (see `.nvmrc`)
- npm `10.x`
- Network access to `https://registry.npmjs.org/`

## First-time Setup

```bash
npm run setup
```

This runs a preflight check (`npm run doctor`) and then installs dependencies.

## Daily Commands

```bash
npm run dev
npm run build
npm run preview
```

## Why setup failed before

The previous install failures were environmental, not code defects:

- DNS/network could not resolve npm registry (`ENOTFOUND registry.npmjs.org`)
- In restricted execution contexts, starting a local dev server can fail with bind permission errors (`listen EPERM`)

## Recovery Checklist

1. Run `npm run doctor`.
2. If DNS fails, switch network/VPN or allow npm registry access.
3. If `npm run dev` returns bind permission errors, run in a non-restricted shell session.
4. Re-run `npm run setup`.
