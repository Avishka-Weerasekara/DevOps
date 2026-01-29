FROM node:20

WORKDIR /app

# Force cache busting
ARG BUILD_VERSION
ENV REACT_APP_BUILD_VERSION=$BUILD_VERSION

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build React (cache-busted)
RUN npm run build

# Serve build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
