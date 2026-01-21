# Use official Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build React app
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the React app in production mode
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
