#!/bin/bash
echo "Starting server..."
# Kill previous process if running
pkill -f 'serve' || true
pkill -f 'app.jar' || true

# Start Angular (serve on port 4200)
cd /home/ubuntu/frontend
nohup serve -s . &

# Start Spring Boot JAR
cd /home/ubuntu/backend
nohup java -jar app.jar &
