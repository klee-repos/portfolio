FROM node:18
ARG REACT_APP_ENVIRONMENT=production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Build the built version
RUN npm run build

RUN yarn global add serve

CMD ["serve","-s","build"]