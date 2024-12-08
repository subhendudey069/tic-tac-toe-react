# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /App

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Optionally build your application (if applicable)
# RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
