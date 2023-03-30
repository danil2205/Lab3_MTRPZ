FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY index.js .

FROM astefanutti/scratch-node
COPY --from=build /app /
EXPOSE 8080
ENTRYPOINT ["node", "index.js"]
