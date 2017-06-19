



# Hackathon starter boilerplate

This is a customizable static boilerpate app using React, to quickly start up the coding process during hackathons. It provides the basic setup including declarative routing to quickly get started on the front end.


## Features

* Routers
* Premade components
* General layout of a react app
* Basic frontend dashboard
* Firebase integration


## To Deploy

Supports deployment using firebase/heroku/github pages

### On development mode

``` 
cd hackathon-starterpack-react
npm install
npm start
``` 


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


