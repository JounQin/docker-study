FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

ADD . /app

RUN yarn \
  && yarn build \
  && yarn run prune \
  && yarn cache clean

CMD ["yarn", "start"]

EXPOSE 7000
