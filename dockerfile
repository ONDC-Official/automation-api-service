FROM node:18
WORKDIR /app
COPY package.json .
COPY . . 
RUN npm install
EXPOSE 3000
RUN npm run build
CMD ["npm","start"]