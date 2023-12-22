FROM --platform=linux/amd64 node:14          

#Working application inside container
WORKDIR /bezkoder-app

#Copy package.json into container
COPY package.json .

#Install packages package.json
RUN npm install

#Copy remaining files into container
COPY . .

#Build application
CMD npm start