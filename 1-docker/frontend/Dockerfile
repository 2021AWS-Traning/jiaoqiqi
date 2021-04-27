 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /frontend
 COPY . .
 RUN yarn install --production
 EXPOSE 3000
 CMD ["node", "src/index.js"]
