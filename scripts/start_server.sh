#!/bin/bash
echo "Starting server..."

sudo pkill -f 'serve' || true
sudo pkill -f 'app.jar' || true

cd /home/ubuntu/frontend
nohup serve -s . > /home/ubuntu/frontend/serve.log 2>&1 &
disown

cd /home/ubuntu/backend
nohup java -jar app.jar > /home/ubuntu/backend/app.log 2>&1 &
disown

echo "Server started."
exit 0
