#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

PORT=3000

# Check if port 3000 is active
PORT_PID=$(lsof -ti :$PORT 2>/dev/null || true)
if [ -n "$PORT_PID" ]; then
  echo "🌸 'The Gift Edit' website is already active on http://localhost:$PORT! (PID: $PORT_PID)"
  echo "================================================================"
  echo "🌐 Visit Website:       http://localhost:$PORT"
  echo "📖 About Our Brand:     http://localhost:$PORT/about"
  echo "🎁 Collections & Edits: http://localhost:$PORT/collections"
  echo "💌 Contact & Concierge: http://localhost:$PORT/contact"
  echo "================================================================"
  echo "To stop the server at any time, run: ./stop-site.sh"
  exit 0
fi

echo "🌸 Starting 'The Gift Edit' Informative Brand Platform on http://localhost:$PORT..."
export PATH="$DIR/node-runtime/bin:$PATH"

# Run production server with nohup
nohup npm start > "$DIR/site.log" 2>&1 &
SERVER_PID=$!
echo $SERVER_PID > .site.pid

sleep 3

PORT_PID=$(lsof -ti :$PORT 2>/dev/null || true)
if [ -n "$PORT_PID" ]; then
  echo "================================================================"
  echo "✨ SUCCESS! The Gift Edit is LIVE locally!"
  echo "================================================================"
  echo "🌐 Home:                http://localhost:$PORT"
  echo "📖 About Us:            http://localhost:$PORT/about"
  echo "🎁 Collections:         http://localhost:$PORT/collections"
  echo "💌 Contact Us:          http://localhost:$PORT/contact"
  echo "================================================================"
  echo "To stop the server at any time, run: ./stop-site.sh"
else
  echo "❌ Server starting in background. Check site.log for details."
fi
