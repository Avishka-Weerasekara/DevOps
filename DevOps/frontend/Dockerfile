FROM node:20

WORKDIR /app

# Copy env FIRST
COPY .env ./

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build React app (env is read here)
RUN npm run build

# Serve build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
