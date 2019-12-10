# Eventify - ESE19 Project
Eventify is an event platform app, which was created for the [ESE 2019](http://scg.unibe.ch/teaching/ese) course. It consists of a frontend, which is an [Ionic application](https://ionicframework.com/) and a backend, which is managed in [Firebase](https://firebase.google.com/).

## Project setup
- Install [Node.js](https://nodejs.org/en/) and NPM (NPM is installed automatically with latest versions of Node.js). You can verify if you have both by running `node -v` and `npm -v` in terminal
- Install [Angular CLI](https://cli.angular.io/) globally (`npm install -g @angular/cli`)
- Install [Ionic](https://ionicframework.com/) globally (`npm install -g ionic`)
- Clone this repository or download it directly as a zip file.
- Go to the frontend folder (`cd <project-path>/frontend`) and then install all dependencies (`npm install`)
- Now you're good to go and can start the project by writing `ionic serve --lab` in the terminal (Need to be in the frontend folder again).

## Project structure
- The project contains one main folder: frontend. The frontend part runs independently from the backend, firebase, but to be able to use some functions, there needs to be a connection to the firebase project. 
- As stated, the backend is managed in firebase, but don't worry, we've already implemented the connection between the frontend and firebase.
- The frontend folder contains an Ionic project, which uses [AngularFire](https://github.com/angular/angularfire) to request data from the backend and processes those to make changes if required and display it on the UI.
- The database folder in frontend is the core of the connection between our app and firebase.
