FROM node:19.9.0
WORKDIR /application
COPY package.json package-lock.json ./
RUN npm ci
COPY . . 
CMD [ "npx", "turbo", "serve" ] 

