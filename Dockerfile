FROM node:18.18.2
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --force
COPY . .

EXPOSE 3131
CMD ["npm", "dev"]