FROM node:20

WORKDIR /app

# Accept build-time variable from Jenkins
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Install deps
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build React app
RUN npm run build

# Serve build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
