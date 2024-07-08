FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/PDS-2024-frontend-grupo-6 /usr/share/nginx/html
COPY --from=build /app/config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
