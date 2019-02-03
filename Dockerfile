FROM node:8-alpine

LABEL maintainer="Josh Johnson <josh@joshuajohnson.co.uk>"

# Suppress npm info logs that are on by default
ENV NPM_CONFIG_LOGLEVEL=warn

# Create the directory that will contain the app, and make subsequent commands run from this directory
WORKDIR /dist

# Copy only files required for npm install so that cached layer is used unless dependencies have changed
COPY package.json package-lock.json ./

RUN npm install --quiet

# Copy the rest of the app's files
COPY /dist .

EXPOSE 3000

CMD ["npm", "run", "prod"]
