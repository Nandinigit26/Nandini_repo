#!/usr/bin/env bash

set -euo pipefail

echo "Working directory: $(pwd)"

if command -v python3 >/dev/null 2>&1; then
	echo "Python found: $(python3 --version)"
elif command -v python >/dev/null 2>&1; then
	echo "Python found: $(python --version)"
else
	echo "Python is not installed or is not on PATH." >&2
	exit 1
fi

echo "Shell script completed successfully."
