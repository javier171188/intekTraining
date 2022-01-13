FROM node:latest

COPY ["package.json",  "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

COPY ["src", "/usr/src/src/"]

COPY ["mockData.js",".babelrc", "/usr/src/"]

COPY [".storybook", "/usr/src/.storybook"] 

EXPOSE 1234 6006

CMD ["npm", "run", "dev"]
