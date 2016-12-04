WebDev: Kowloon Examen
======================


Best practices from:
https://github.com/AlexVanderbist/kowloon-webdev-angular-nodejs.git


Log
---

- 30/11/2016: Init commit
- 30/11/2016: Added Angular project structure (LIFT & Folders by feature) and build tools
- 01/12/2016: Added Bootstrap and Bootstrap-UI
- 04/12/2016: Added sidebar



Installation
------------

### NPM

Execute the following command to get the latest version of some required packages:

```terminal
npm install --no-bin-links
```

The `--no-bin-links` flag might be necessary because symlinks don't exist on Windows.

### Bower

Execute the following command to get the latest version of the front-end packages:

```terminal
bower install 
```


Usage
-----

You will need `gulp-cli` to build the fron-end.

There are a couple of usefull features in this build system:

### Serving

`gulp serve` will compile some resources to /.tmp and use some from /src to provide you with a livereloading version of the app.

`gulp serve:dist` will do exactly the same as the above but build first and serve/livereload from the /dist folder. 

### Building

`gulp build` or simply `gulp` will build the /src directory to /dist. This includes minifying, uglifying, etc...

### Extra

#### Bower injection

Gulp will automagically inject all installed bower packages into your app when building or serving!

#### Automatic ngInjection

Gulp will make sure none of your code breaks when minifying. Make sure you add `/** @ngInject */` above functions where dependancy injection is used.