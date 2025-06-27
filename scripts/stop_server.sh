#!/bin/bash
echo "Stopping existing server..."

sudo pkill -f 'serve' || true
sudo pkill -f 'app.jar' || true

echo "Server stopped."
