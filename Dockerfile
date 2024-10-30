FROM node:23.0.0

WORKDIR /app-backend

COPY package.json .

COPY package-lock.json . 

RUN npm install  

COPY . .  

EXPOSE 5000

CMD ["npm", "start"]
