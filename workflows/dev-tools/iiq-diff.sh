#!/bin/bash
# Simulated diff for SailPoint IIQ artifacts

if [ -z "$1" ]; then
  echo "❌ Usage: ./iiq-diff.sh path/to/file.xml"
  exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
  echo "❌ File not found: $FILE"
  exit 1
fi

echo "📂 Comparing local version of $FILE to deployed IIQ artifact..."
sleep 1

# Simulate diff output
echo "------------------------------------------"
echo "🔍 Simulated Differences:"
echo "- Line 14: plan.add(...) was added"
echo "- Line 23: description updated"
echo "------------------------------------------"
echo "✅ Mock diff completed."
