 FROM cypress/included:12.8.1

 COPY package.json package.json

 RUN npm i

 COPY cypress.config.js cypress.config.js
 COPY cypress/ cypress/
