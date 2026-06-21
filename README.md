# Intergate.io - Solid Start

Utilizing solid-start and mdx.

## Moved from `Deploy Classic` to `Deno Deploy` (New Deno Infra 2026)

Deploy to deno via `git push`

- I don't like this, so try to revert to manual deploy from commandline

### Build & deploy (Old)

1. `npm run prepare`
2. `npm run build`


=> `npm run prepare && npm run build && npm run deploy`

## Panda CSS

Panda CSS relies on generating exports based on `panda.config`.

This means that `dev` and `prod` need to be preapred ahead of time, so switching between building for `prod` (for deploy) and `dev` needs a re-run of `panda codegen` inbetween, which rebuilds panda assets in `/styled-system/`.

Ideally `package.json::scripts` should be set up to run concurrently, with

- `dev` using `NODE_ENV=dev panda --watch` and concurrently `vinxi dev`
- `build` using `NODE_ENV=prod panda codegen && vinxi build`

...but I just can't be bothered right now.