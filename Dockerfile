FROM mhart/alpine-node:4.2.1
EXPOSE 3000
EXPOSE 3001

WORKDIR /src

RUN apk add --update \
  build-base \
  autoconf \
  automake \
  file \
  nasm \
  libpng-dev \
  python \
  bash \
  git \
  && rm -rf /var/cache/apk/*

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /src/package.json
RUN npm install -g npm
RUN npm install

# Add `node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH
