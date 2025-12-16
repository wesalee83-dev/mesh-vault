FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy app source
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
