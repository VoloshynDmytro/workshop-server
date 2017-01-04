# README #

# Workshop Server
Workshop server repo app based on ExpressJS

For the build process we are using Gulp

This boilerplate app is created for building REST APIs in Node.js using ES6 and Express with Code Coverage and JWT Authentication

## Setup

```bash 

git clone
    
cd workshop-server
  
npm install

npm run serve

``` 

### NPM Tasks
Here's a list of available tasks:

* `serve` - serving server side code
* `build` - build (copy and transpiling code)
* `test` - run test
* `lint` - run linter for check code
  
## Build System

`Gulp` handles all SERVER-SIDE transpiling and serving



## SETUP Mongodb


### On Mac OS X

* Installing mongo:

```bash
brew update
brew install mongodb
```

* Start mongodb on login:

```bash
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```

* Check does it works:

```bash
mongod --version
```

Output example:
```bash
db version v3.2.4
git version: e2ee9ffcf9f5a94fad76802e28cc978718bb7a30
OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```


### On Linux (Ubuntu/Mint)

Installing mongodb node.js driver:


* Run these commands in terminal:

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

* Installing mongodb node.js driver:

```bash
npm install mongodb
```

* After package installation MongoDB will be automatically started. You can check this by running the following command.

```bash
service mongod status
```


