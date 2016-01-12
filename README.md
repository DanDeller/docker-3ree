## Universal App Boilerplate
An example universal JS application written with the 3REE stack, React + Redux + RethinkDB + Express on Docker. A stack for building apps, front and back end, with just Javascript. Inspired by [GordyD](https://github.com/GordyD/3ree)

### Main Features

 - Universal (Isomorphic) Javascript
 - Asyncronous example
 - Use of RethinkDB Changefeeds for Realtime

## Install & Setup

You will need to install [RethinkDB](http://www.rethinkdb.com). You can find instruction on how to do so [here](http://rethinkdb.com/docs/install/).

 - Clone the repo `git clone git@github.com:leian-ivey/3ree-d.git`
 - Run `npm install`

Once you have completed the above steps then you may continue onto to development.

### (OSX) Run into docker for development
You can build and dev with the boilerplate through docker container, it runs with dinghy.
 - Install [dinghy](https://github.com/codekitchen/dinghy) (it has support for NFS sharing which is required for changes detection and it's fast!)
 - `$ dinghy up`
 - Connect the Docker client
 - Ensure contents of `server/api/config.json` is correct for your environment.
 - `$ docker-compose build`
 - `$ docker-compose up`
 - Run `npm run db-setup` to set up DB (you should only need to do this once.)
 - Go to http://webapp.docker:3000

### Connect the Docker Client
When you `dinghy up` to start your VM your success message will include some lines of code starting with export which you need to set your current Docker daemon. To do so, copy and paste each export line as a executable command in terminal.
![alt tag](https://dl.dropboxusercontent.com/u/12648103/Screen%20Shot%202016-01-12%20at%203.04.38%20PM.png)

### Tech Used

 - React - view layer
 - React Router - universal routing
 - Redux - state management
 - RethinkDB - persistance layer
 - Express - server framework
 - Socket.io - for realtime communication between clients and server
 - Webpack - module bundling + build for client
 - Webpack Hot Middleware
 - Webpack Dev Middleware
 - Babel 6
 - EJS - view templates
 - Superagent - universal http requests

### To Do
 - Set up Webpack with Gulp
 - Fix Redux Router Issue with upgrade
 - Render Index File instead of EJS
 - Make a video in case the notes above are a bit confusing
 - Switch to Material UI

### Sources

 - [3REE](https://github.com/GordyD/3ree)
 - [ES7 Isomorphic Flux/ReactJS Boilerplate](http://isomorphic.iam4x.fr)
