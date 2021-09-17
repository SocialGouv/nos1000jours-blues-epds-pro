FROM node:15.9-alpine

WORKDIR /app

COPY . .

RUN chown node: /app

USER node

RUN yarn --frozen-lockfile --prefer-offline && yarn cache clean
# RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean
# RUN yarn build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# CMD ["yarn", "start"]
CMD ["yarn", "start:ci"]
