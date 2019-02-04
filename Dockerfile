FROM node:8-alpine
LABEL maintainer="Josh Johnson <josh@joshuajohnson.co.uk>"
ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /build 
COPY . ./
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
