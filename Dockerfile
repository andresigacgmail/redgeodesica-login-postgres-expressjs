from node:16-bullseye
WORKDIR /app
copy . .
run npm install
expose 3001
CMD [ "npm","start"]