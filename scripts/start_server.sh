#!/bin/bash
echo "Starting server..."

# Start Angular app with PM2
cd /home/ubuntu/frontend
pm2 delete serve || true
pm2 start serve --name serve -- -s . --listen 4200

# Start Spring Boot app with systemd
sudo systemctl restart app

echo "Server started."
exit 0
