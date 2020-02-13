FROM node:10

#crete app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#create app directory

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app
#install dependencies

RUN npm install --only=dev

#bundle app source

COPY . .

EXPOSE 3000

#command to start server

CMD ["node", "./bin/www"]