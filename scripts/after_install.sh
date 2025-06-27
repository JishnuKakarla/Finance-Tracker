#!/bin/bash

echo "Running after_install"

# Ensure Node.js and npm are installed
if ! command -v npm &> /dev/null
then
    echo "Installing Node.js and npm..."
    sudo apt-get update
    sudo apt-get install -y nodejs npm
fi

# Change to your frontend directory
cd /home/ubuntu/frontend

# Install 'serve' globally using npm
npm install -g serve

# (Optional) Install project dependencies if needed
npm install

echo "after_install completed"
