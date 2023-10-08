FROM node:16-bullseye
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm","start"]