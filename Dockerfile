# ---- Stage 1: Build ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# Build-time: VITE_* se incrustan en el bundle del cliente.
# Para cambiarlas hay que reconstruir la imagen.
ARG VITE_BASE_PATH=""
ARG VITE_DEFAULT_CACHE_TTL=300000
ENV VITE_BASE_PATH=$VITE_BASE_PATH
ENV VITE_DEFAULT_CACHE_TTL=$VITE_DEFAULT_CACHE_TTL

RUN yarn build

# ---- Stage 2: Production runner ----
FROM node:22-alpine AS runner

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

WORKDIR /app
RUN chown node:node /app

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production && yarn cache clean

COPY --from=builder --chown=node:node /app/dist ./dist

USER node

EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:'+(process.env.PORT||4321)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]

# Runtime: API_BASE_URL, API_CACHE_TTL, etc. se leen con process.env
# y se pasan en "docker run -e" o en las variables de Railway.
CMD ["node", "./dist/server/entry.mjs"]