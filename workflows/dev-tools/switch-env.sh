#!/bin/bash
# Simulates switching between IIQ environments

if [ -z "$1" ]; then
  echo "❌ Usage: ./switch-env.sh [DEV|QA|PROD]"
  exit 1
fi

TARGET_ENV="$1"

if [[ "$TARGET_ENV" != "DEV" && "$TARGET_ENV" != "QA" && "$TARGET_ENV" != "PROD" ]]; then
  echo "❌ Invalid environment. Choose from DEV, QA, or PROD."
  exit 1
fi

jq --arg env "$TARGET_ENV" '.current = $env' environments.json > tmp.json && mv tmp.json environments.json

echo "✅ Switched to $TARGET_ENV environment."
