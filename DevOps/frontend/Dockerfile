FROM node:20

WORKDIR /app

# Copy env first (IMPORTANT)
COPY .env ./

# Install deps
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build React app (env is injected here)
RUN npm run build

# Serve build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
