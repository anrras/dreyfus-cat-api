FROM node:20.13.0-alpine3.19 as base
FROM base as dependencies

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM base as build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build
RUN pnpm prune --prod

FROM base as deploy

WORKDIR /app
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/node_modules ./node_modules
USER node

# CMD [ "node", "dist/main.js" ]


