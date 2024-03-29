FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install  --force
COPY . .
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/user-webapp/ /usr/share/nginx/html
EXPOSE 80