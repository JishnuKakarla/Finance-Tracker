#!/bin/bash
echo "Running before_install"

# Remove old frontend files
rm -rf /home/ubuntu/frontend/*

# Remove old backend JAR
rm -f /home/ubuntu/backend/app.jar
