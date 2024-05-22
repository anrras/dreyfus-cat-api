FROM node:20.13.0-alpine3.19 as base
FROM base as dependencies

WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build --configuration=production

FROM nginx:alpine

## Copy our default nginx config
COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build /app/dist/dreyfus-cat-api/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
