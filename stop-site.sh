#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

PORT=3000
PORT_PID=$(lsof -ti :$PORT 2>/dev/null || true)

if [ -n "$PORT_PID" ]; then
  kill -9 $PORT_PID 2>/dev/null || true
  rm -f .site.pid 2>/dev/null || true
  echo "🌸 'The Gift Edit' server on port $PORT has been stopped."
else
  echo "🌸 No active server was running on port $PORT."
fi
