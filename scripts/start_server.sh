#!/bin/bash
echo "Starting server..."

# Kill previous 'serve' and 'app.jar' processes (use sudo to avoid permission issues)
sudo pkill -f 'serve' || true
sudo pkill -f 'app.jar' || true

# Start Angular (serve on port 4200)
cd /home/ubuntu/frontend
nohup serve -s . > /home/ubuntu/frontend/serve.log 2>&1 &

# Start Spring Boot JAR
cd /home/ubuntu/backend
nohup java -jar app.jar > /home/ubuntu/backend/app.log 2>&1 &

echo "Server started."
