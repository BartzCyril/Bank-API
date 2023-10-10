# Project #10 - Argent Bank API

This codebase contains the code needed to run the frontend and the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/) => back
- [Node.js >= v14](https://nodejs.org/en/) => front
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

[You can use Node Version Manager to switch versions](https://github.com/nvm-sh/nvm)

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash

cd front

# Switch to Node.js version 18 (Note: 18 is used here as an example, make sure to use a version >= 14)
nvm use 18

# Install dependencies
npm install

# Start the development server for the front-end
npm run dev

cd ..

# Switch back to Node.js version 12
nvm use 12

# Install dependencies for the backend
npm install

# Start the local development server for the backend
npm run dev:server

# Populate the database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

