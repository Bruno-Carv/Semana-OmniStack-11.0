FROM node:12.16.1-alpine

WORKDIR /sru/app

COPY package.json /sru/app/package.json
COPY package-lock.json /sru/app/package.json

RUN cd /sru/app
RUN npm install

COPY . /sru/app

CMD ["npm", "start"]