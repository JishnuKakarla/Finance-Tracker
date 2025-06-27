#!/bin/bash
echo "Running before_install"

# Remove old frontend files
sudo rm -rf /home/ubuntu/frontend/*

# Remove old backend JAR
sudo rm -f /home/ubuntu/backend/app.jar
