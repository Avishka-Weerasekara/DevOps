FROM node:20

WORKDIR /app

# -------------------------------
# 1. Build-time variable (IMPORTANT)
# -------------------------------
ARG BUILD_VERSION
ENV REACT_APP_BUILD_VERSION=$BUILD_VERSION

# -------------------------------
# 2. Install dependencies first
# -------------------------------
COPY package*.json ./
RUN npm install

# -------------------------------
# 3. Copy rest of the source code
# -------------------------------
COPY . .

# -------------------------------
# 4. Build React app
# -------------------------------
RUN npm run build

# -------------------------------
# 5. Install serve & expose port
# -------------------------------
RUN npm install -g serve
EXPOSE 3000

# -------------------------------
# 6. Start React app
# -------------------------------
CMD ["serve", "-s", "build", "-l", "3000"]
