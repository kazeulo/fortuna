#!/bin/bash

# echo "Starting backend..."
# cd backend || exit
# npm start &
# BACKEND_PID=$!

cd ..
echo "Starting frontend..."
cd frontend
npm start &
FRONTEND_PID=$!

wait $BACKEND_PID
wait $FRONTEND_PID
