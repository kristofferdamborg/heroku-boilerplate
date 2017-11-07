# heroku-boilerplate
A boilerplate projekt with Node.js API and Vue Client, for Heroku deployment

## 1. Run "heroku create <app-name>" in root
## 2. Run "heroku config:set NPM_CONFIG_PRODUCTION=false" in root, to make sure that devDependencies in client gets installed on server
## 3. Git init + git add . + git commit + git push heroku master

## Info:

### Everytime you wanna deploy the application, repeat step 3
### NPM dependencies will be automatically installed by Heroku on deployment
### Client will automatically be built by Heroku on deployment