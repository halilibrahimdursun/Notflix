# Use a Node.js base image with a specific version
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application (replace 'your-configuration-name' with your actual configuration)
RUN ng build --configuration=production

# Expose port 80 (or the port your Angular app is configured to run on)
EXPOSE 80

# Start the Angular app (replace 'your-app-name' with your actual app name)
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check", "--public-host", "notflixapp"]
