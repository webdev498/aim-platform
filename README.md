# AIM Platform - User Interfaces
Insert intro here.

## Basic Information

* You must have git and gitflow installed on you computer
* Any global flagged steps can be skipped if you have already performed them
* If your user does not have access to make global changes you will need to add sudo before the global command or switch to a privileged user
* Replace FirstName, LastName, and email@example.com with your correct values

Run the following Commands:
```
# Install global tools
npm install --global lerna@prerelease
npm install --glabal angular-cli

# Clone, checkout, and install base dependencies, and refresh sub packages
git clone git@scm.aimdevops.com:aim/aim-platform-ui.git
cd aim-platform-ui
git config user.name "FirstName LastName"
git config user.email "email@example.com"
git checkout -b develop
npm install
lerna bootstrap
```

Testing Back Office

```
cd packages/aim-platform-ui-backoffice
ng serve
```

Testing Client Portal

```
cd packages/aim-platform-ui-clientportal
ng serve
```

## Tools

* Lerna - https://lernajs.io/
* Angular CLI - https://cli.angular.io/