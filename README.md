
# Doctor Lookup

#### _Epicodus JavaScript Week 1 Independent Project - Modern JS Apps, 3-17-17_

#### By Maggie Harrington

## Description

An application written in JavaScript to demonstrate the following skills:
* Creating an asset pipeline using Gulp
* Managing build dependencies with NPM
* Managing front-end dependencies with Bower
* Using a development server
* Making requests to an API using AJAX
* Parsing JSON responses to AJAX servers
* Managing API keys
* Using SASS to replace CSS for page styling


## Setup/Installation Requirements

* Make sure that you have Node.js installed; see https://nodejs.org/en/download/ for installation details.

* Clone project at my GitHub repository: https://github.com/maggie-harrington/js-week1-doctor-lookup .

* Open the terminal and enter `cd Desktop`. Copy the link above (in the first bullet point), then type `git clone ` and enter the link. You will now have a copy of the project on your desktop.

* In the terminal, enter `cd js-week1-doctor-lookup`. You will now be in the top level of the project directory.

* Run the following in the command line to install packages listed in the manifest files (package.json and bower.json):

    `npm install`

    `bower install`

* Next you will need your own API key. Go to https://developer.betterdoctor.com/ and click "Sign up" under "Get your free API key".  

* From the top level of the project directory, create a new file to store your API key. The file must be named .env and contain the following line: `exports.apiKey = "PASTE-YOUR-API-KEY-HERE";`

* Now you are ready to load the project. Back in the terminal, run the following commands:

    `gulp build`

    `gulp serve`

* Make sure to keep the terminal window containing the server open while the project runs in your web browser.

## Known Bugs

No known bugs at this time.

## Support and contact details

If you run into any issues or have questions, ideas or concerns, please feel free to contact me at maggie.harrington@gmail.com

## Technologies Used

Written using Git Bash, Atom, JavaScript, Bootstrap, jQuery, Node.js, Node Package Manager (NPM), Gulp, Browserify, JSHint, Bower, Sass, and an API key from the BetterDoctor API.

## MIT License

Copyright (c) 2017 Maggie Harrington



## Planning

### Specifications / project requirements

* Create a website where users may enter a medical issue (ie: “toothache”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue.
* Use the BetterDoctors API to retrieve this information.
* API key variable in .env must be named: exports.apiKey


### Project configuration / dependencies

###### Initial files:

* Make sure you are in top level of project directory
* Initialize git repository and add remote
* Create sub directories: js, scss
* Create initial files: index.html, scss/styles.scss, js/doctor.js, js/doctor-interface.js, gulpfile.js
* Create .gitignore file containing the following:

  `node_modules/`

  `DS_Store`

  `build/`

  `tmp/`

  `bower_components/`

  `.env`


###### NPM / Gulp:


* `npm init` (sets up npm, creates package.json)

* Enter title etc when prompted

* Run the following installs:

  `npm install gulp --save-dev`

  `npm install browserify --save-dev`

  `npm install vinyl-source-stream --save-dev`

  `npm install gulp-concat --save-dev`

  `npm install gulp-uglify --save-dev`

  `npm install gulp-util --save-dev`

  `npm install del --save-dev`

  `npm install jshint --save-dev`

  `npm install gulp-jshint --save-dev`

* Require all of the above in gulpfile.js and add associated tasks
* Include in index.html head:

  `<script src="build/js/app.js" type="text/javascript"></script>`

* `gulp jshint` -> linter, run to check for errors in js code

* `gulp build` OR `gulp build --production` (only for production, includes minify task) -> run to build/rebuild app.js file


###### Bower:

* `npm install bower -g` (installs bower - may not always be necessary)

* `bower init` (sets up bower, creates bower.json)

* Run the following installs:

  `bower install jquery --save`

  `bower install bootstrap --save`

  `bower install moment --save`

  `npm install bower-files --save-dev`

* Include in index.html head:

  `<link href="build/css/vendor.css" rel="stylesheet" type="text/css">`

  `<script src="build/js/vendor.min.js" type="text/javascript"></script>`

* `gulp bowerJS` -> run to add new JS front-end dependencies


###### BrowserSync

* `npm install browser-sync --save-dev`

* Update requirements and tasks in gulpfile.js

* `gulp serve` -> run from top level project directory to launch server and run app


###### Sass

* `npm install gulp-sass gulp-sourcemaps --save-dev`

* Update requirements and tasks in gulpfile.js
* Include in index.html head:

  `<link href="build/css/styles.css" rel="stylesheet" type="text/css">`


### Project stages

* Config/dependencies (see above)
* Write initial html and js and make sure they are linked
* Create account to obtain API key
* Keep API key in local .env file, add require link on js file (make sure to include user instructions on creating .env with unique API key)
* Integrate API/ AJAX to complete basic functionality (listed above in specs)
* Refactor to use promises (.then and .fail)
* Refactor to separate front end (-interface.js) and back end logic; link front and back end with module and require statements.
* Clean up code/ refactor
* Styling with SASS (if time allows)
