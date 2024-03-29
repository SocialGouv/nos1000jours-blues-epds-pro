FROM node:15.9-alpine AS node
WORKDIR /app

FROM node AS builder
COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ARG NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_SITE_ID=$NEXT_PUBLIC_MATOMO_SITE_ID

ARG NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_URL=$NEXT_PUBLIC_MATOMO_URL

ARG NEXT_PUBLIC_MATOMO_ENABLED
ENV NEXT_PUBLIC_MATOMO_ENABLED=$NEXT_PUBLIC_MATOMO_ENABLED

RUN yarn build
RUN yarn workspaces focus --production && yarn cache clean

FROM node
COPY --from=builder /app /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

USER 1000

CMD ["yarn", "start"]
