FROM node:20-alpine AS node
WORKDIR /app

FROM node AS builder
ENV COREPACK_HOME=/corepack

# Provide defaults so `docker build` works without requiring build args.
# (CI can still override these via `--build-arg`.)
ARG NEXT_PUBLIC_API_URL=https://backoffice-1000jours-preprod.dev.fabrique.social.gouv.fr
ARG NEXT_PUBLIC_MATOMO_SITE_ID=47
ARG NEXT_PUBLIC_MATOMO_URL=https://matomo.fabrique.social.gouv.fr/
ARG NEXT_PUBLIC_MATOMO_ENABLED=false

# Next 11 / webpack hashing is incompatible with OpenSSL 3 without legacy provider
# (needed on Node 17+; Node 20 uses OpenSSL 3)
ENV NODE_OPTIONS=--openssl-legacy-provider

# Keep the `pnpm fetch` layer cacheable when only `package.json` changes.
# `pnpm fetch` uses the lockfile, so we only copy pnpm files here.
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack pnpm fetch

# Now copy `package.json` and install the exact pnpm version declared there.
COPY package.json ./
RUN corepack install

RUN corepack pnpm install --offline --frozen-lockfile

COPY . .

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_MATOMO_SITE_ID=$NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_URL=$NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_ENABLED=$NEXT_PUBLIC_MATOMO_ENABLED

RUN corepack pnpm build
RUN corepack pnpm prune --prod

FROM node
ENV COREPACK_HOME=/corepack
COPY --from=builder /corepack /corepack
COPY --from=builder /app /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

USER 1000

CMD ["corepack", "pnpm", "start"]
