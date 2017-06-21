



# Hackathon starter boilerplate

This is a customizable static boilerpate app using React, to quickly start up the coding process during hackathons. It provides the basic setup including declarative routing to quickly get started on the front end.


## Features

* React Routers
* Premade components
* General layout of a react app
* Basic frontend dashboard
* Yarn integration
* Deployment (Heroku, gh-pages, express, firebase)


## App setup

Supports deployment using firebase/heroku/github pages

### On development mode

``` 
cd hackathon-starterpack-react
npm install
npm start
``` 

or using yarn
``` 
npm install -g yarn
yarn
yarn run all
``` 

or using the express server (server.js)

### On Firebase

``` 
  npm install -g firebase-tools
  firebase login
  firebase init
  firebase deploy
  
```

### On Heroku

```
heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
heroku open
```

To deploy to `gh-pages` this very useful npm script [deploy-to-gh-pages](https://www.npmjs.com/package/deploy-to-gh-pages) can be used. 

