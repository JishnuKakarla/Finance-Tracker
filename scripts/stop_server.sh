#!/bin/bash
echo "Stopping existing server..."

pm2 stop serve || true
sudo systemctl stop app || true

echo "Server stopped."
