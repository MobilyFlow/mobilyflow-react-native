#!/bin/sh
SCRIPT_DIR=$(dirname "$0")

VERSION=$(cat package.json | jq -r '.version')
echo "export const BRIDGE_VERSION = '${VERSION}';" > ${SCRIPT_DIR}/../src/version.ts
