FROM node:20

WORKDIR /app

# ---- FORCE CACHE INVALIDATION ----
ARG BUILD_VERSION
ENV REACT_APP_BUILD_VERSION=$BUILD_VERSION

COPY package*.json ./
RUN npm install

COPY . .

# FORCE REBUILD
RUN echo "Building version: $BUILD_VERSION"
RUN npm run build

RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
