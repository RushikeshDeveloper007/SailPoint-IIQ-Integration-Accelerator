#!/bin/bash
# Simulated deploy to SailPoint IIQ (no real connection)

if [ -z "$1" ]; then
  echo "❌ Usage: ./iiq-deploy.sh path/to/file.xml"
  exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
  echo "❌ File not found: $FILE"
  exit 1
fi

echo "🚀 Simulating deployment of $FILE to SailPoint IdentityIQ..."
sleep 1
echo "✅ Mock deploy completed successfully."
