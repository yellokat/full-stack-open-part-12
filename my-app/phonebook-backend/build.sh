#!/bin/bash
npm install
npm audit fix --force
cd ../phonebook-frontend
npm install
npm audit fix --force
cd ../phonebook-backend
npm run build:ui