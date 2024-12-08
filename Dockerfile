# Use the official Node.js image
FROM node:18-alpine 

# Set the working directory
WORKDIR /App

# Copy package.json and package-lock.json (if available) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
# RUN npm run build

# Expose the application port (if applicable)
EXPOSE 5173

# Command to start the application
CMD ["npm", "run dev"]
