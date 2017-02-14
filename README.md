# AIM Platform - User Interfaces
This project will contain all the user interfaces that will be managed under the AIM Platform

## Basic Information

* You must have git and gitflow installed on you computer
* Any global flagged steps can be skipped if you have already performed them
* If you are not using the recommended env setup your user will need to be able to install packages at the global scope.
* Replace FirstName, LastName, and email@example.com with your correct values

##### Recommended preinstallation
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
After restarting your ssh session
```
nvm install 7.5.0
npm update --global
```
This will install node version 7.5.0 as well as update npm to the newest version
All future npm global commands will be sandboxed to you user and version of node

##### Installation
```
# Install global tools
npm install --global @angular/cli@1.0.0-beta.30
npm install --global gulp

# Clone, checkout, and install base dependencies, and refresh sub packages
git clone git@scm.aimdevops.com:aim/aim-platform-ui.git
cd aim-platform-ui
git config user.name "FirstName LastName"  #Replace with your FirstName and LastName
git config user.email "email@example.com"  #Replace with your email address
git checkout -b develop
npm install
```

## Package installations
Replace PACKAGE with the specific package, for example "backoffice"
```
cd packages/PACKAGE
npm install
```

##### Running Packages
Replace PACKAGE with the specific package, for example "backoffice"
```
cd packages/PACKAGE
ng serve
```

###### Troubleshooting
If you receive an error about "node-sass" then delete the node_modules folder and run `npm install`

Testing Client Portal
```
cd packages/clientportal
ng serve
```

## Notes

Running `ng --version` should produce the following output
```
                             _                           _  _
  __ _  _ __    __ _  _   _ | |  __ _  _ __         ___ | |(_)
 / _` || '_ \  / _` || | | || | / _` || '__|_____  / __|| || |
| (_| || | | || (_| || |_| || || (_| || |  |_____|| (__ | || |
 \__,_||_| |_| \__, | \__,_||_| \__,_||_|          \___||_||_|
               |___/
@angular/cli: 1.0.0-beta.30
node: 7.5.0
```
There should be additional information such as `os:` and package related items

## Tools and Additional Information

* Angular CLI - https://cli.angular.io/
* Swagger Editor - http://editor.swagger.io/ 
* NVM - https://github.com/creationix/nvm
* GitFlow - http://nvie.com/posts/a-successful-git-branching-model/
