# Contacts Book Application

## CI/CD

This application has a CI/CD pipeline. Its configuration can be seen in the file .github\workflows\main.yml. The pipeline is executed every time a push is done to the repo.

#### Pipeline steps:

- Checkout: using actions/checkout@v2 we get the project fetched
- Node.js 14 set up: using actions/setup-node@v3
- Dependencies install: npm ci gets executed to retrieve the app dependencies as reflected in the package-lock.json
- Tests execution: Application Jasmine/Karma tests are run in a headless mode
- Build: after the tests are successful, the application is production-built
- Deploy: using akhileshns/heroku-deploy@v3.12.12, the application is deployed to https://fabio-contacts-book.herokuapp.com/. In this step an api key and sensible information are required. In order to keep this data safe, it is provided in the pipeline config as placeholders that github secrets replaces at execution time.

## Running Application

The latest version of the application is deployed in this url:
https://fabio-contacts-book.herokuapp.com/
