# Setting up dev environment for CS3308 group project, using Angular. 

1. First, install npm (node package manager). You have probably already done this. Good instructions for doing this the first time or verifying that you have done this and are up to date are here:
https://www.npmjs.com/get-npm

2. Create an directory on your machine directory for this project

3. Clone project into directory:
```git clone git@github.com:minime905/CSPB-3308-Group-Project.git```

4. Change into the Team Alpha Wolf Squadron folder of the repo you just cloned. To do that you will most likely use:
```cd CSPB-3308-Group-Project/Team\ Alpha\ Wolf\ Squadron/```

*NOTE: You should not need a global install of Angular-Cli (acquired by running `npm install -g @angular/cli`) because a local copy is shipped with repo. If you already have it, no problem. However, do not run any other ng commands inside the group project directory at this time*

5. Use npm to install dependencies. npm will reference the package.json file to find out what it needs to install:
```npm install```

You environment should now have everything it needs. You should not get any warnings, but if you do then do not run any other updates or install any other dependencies unless you plan on doing those things and then testing them and staging and committing the package.json file to remote origin. 

To test that everything has been installed and that you can run the dev environment, use angular-cli command: `ng serve` while you are in the Team Alpha Wolf Squadron directory.