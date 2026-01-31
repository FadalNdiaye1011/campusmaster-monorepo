#!/bin/bash
set -e

echo "Node version:"
node -v

echo "Enable corepack"
corepack enable

echo "Activate pnpm 9.12.3"
corepack prepare pnpm@9.12.3 --activate

echo "PNPM version:"
pnpm -v

pnpm install --frozen-lockfile
