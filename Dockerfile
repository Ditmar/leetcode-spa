# ── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer cache)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# VITE_ vars are baked into the bundle at build time.
# Pass them with: docker build --build-arg VITE_BASE_PATH=/prefix ...
ARG VITE_BASE_PATH=""
ARG VITE_DEFAULT_CACHE_TTL=300000
ENV VITE_BASE_PATH=$VITE_BASE_PATH
ENV VITE_DEFAULT_CACHE_TTL=$VITE_DEFAULT_CACHE_TTL

RUN yarn build

# ── Stage 2: Production runner ────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Install only production deps (includes `astro` for the preview server)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy the static build output
COPY --from=builder /app/dist ./dist

# astro preview reads this config for host/port settings
COPY astro.config.mjs ./

EXPOSE 4321

# `astro preview` serves the dist/ folder on 0.0.0.0:4321 (configured in astro.config.mjs)
CMD ["node_modules/.bin/astro", "preview"]
