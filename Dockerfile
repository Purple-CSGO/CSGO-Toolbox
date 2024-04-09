FROM node:20-alpine

WORKDIR /app

COPY .output/ /app

CMD ["node", "server/index.mjs"]

# docker build -t purp1e/csgo-toolbox:latest .