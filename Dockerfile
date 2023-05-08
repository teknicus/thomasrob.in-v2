FROM node:18-alpine AS builder
RUN apk update

ADD . /code/
WORKDIR /code/

RUN npm install
RUN npm run build

FROM nginx:1.24.0

COPY --from=builder /code/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

#EXPOSE 8123
# CMD ["http-server", "/code/.vitepress/dist", "--cors", "-p", "8123"]