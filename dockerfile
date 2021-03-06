FROM node:alpine
WORKDIR ./ ./user/app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 80
CMD ["npm", "run", "start"]