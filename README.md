WebDev: Kowloon Examen
======================

Running from C9
---------------

- Start MongoDB `cd ~; ./mongod;`
- Start Express.js via C9 run config


To-do
-----

- Fake infinite scroll


Log
---

- 30/11/2016: Init commit
- 30/11/2016: Added Angular project structure (LIFT & Folders by feature) and build tools
- 01/12/2016: Added Bootstrap and Bootstrap-UI
- 04/12/2016: Added sidebar
- xx/12/2016: Added image slider and homepage categories
- 26/12/2016: Added featured products on homepage
- 01/01/2017: Added newsletter form
- 01/01/2017: Added FAQ
- 02/01/2017: Added search
- 05/01/2017: Added HTML for category view
- 05/01/2017: Added analytics with page tracking
- 06/01/2017: Finshed category view, sort of
- 06/01/2017: Started on product detail view
- 06/01/2017: Started on express.js back-end
- 06/01/2017: Added /api with POST /newsletter endpoint
- 06/01/2017: Hooked up newsletter directive with api
- 06/01/2017: Added favicon and stuff
- 06/01/2017: Finshed product detail view
- 12/01/2017: Started on mobile styling



Installation
------------

### NPM

Execute the following command to get the latest version of some required packages:

```terminal
npm install [--no-bin-links]
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