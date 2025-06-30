#!/bin/bashMore actions
echo "Running after_install"

# Install Node.js and npm if not present
if ! command -v npm &> /dev/null
then
    sudo apt-get update
    sudo apt-get install -y nodejs npm
fi

# Install PM2 globally
sudo npm install -g pm2

# Install frontend dependencies
cd /home/ubuntu/frontend

# Install 'serve' globally using npm
npm install -g serve

npm install

# Copy the systemd service file and reload systemd
sudo cp /home/ubuntu/scripts/app.service /etc/systemd/system/app.service
sudo systemctl daemon-reload
sudo systemctl enable app

echo "after_install completed"
