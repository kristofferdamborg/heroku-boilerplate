# heroku-boilerplate
A boilerplate projekt with Node.js API and Vue Client, for Heroku deployment


## Deployment:

## 1. Run "heroku create your-app-name" in root (you need to have Heroku CLI installed)
## 2. Run "heroku config:set NPM_CONFIG_PRODUCTION=false" in root, to make sure that devDependencies in client gets installed on server
## 3. Git init + git add . + git commit + git push heroku master

## Info:

### For local development, create a dev.js file in api/config with development keys (same as api/config/prod.js)
### Everytime you wanna deploy the application, repeat step 3 (without git init)
### NPM dependencies will be automatically installed by Heroku on deployment
### Client will automatically be built by Heroku on deployment