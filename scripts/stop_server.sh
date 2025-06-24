#!/bin/bash
echo "Stopping existing server..."
pkill -f 'serve'
pkill -f 'app.jar'
