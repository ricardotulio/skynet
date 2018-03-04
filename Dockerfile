FROM node:8.9-alpine AS build

WORKDIR /skynet

RUN npm install -g yarn

ADD . .
RUN yarn install
RUN yarn build

FROM node:8.9-alpine
COPY --from=build /skynet /skynet
WORKDIR /skynet

EXPOSE 8000

ENTRYPOINT ["npm", "start"]
