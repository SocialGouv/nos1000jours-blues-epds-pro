FROM node:15.9-alpine

WORKDIR /app

RUN chown node: /app

USER node

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean
# RUN yarn build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# CMD ["yarn", "start"]
CMD yarn build; yarn start
