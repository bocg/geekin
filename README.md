# geekin
Website for geekin radio -- http://www.getgeek.in/
This site is in development at the following -- http://www.geekin-radio.github.io/geekin

##When downloading/cloning this repo...

You will need to have npm (https://www.npmjs.com/) and bower (http://bower.io/#install-bower) installed to install the dependencies for this repo and its development/build process.

First you'll need to install Node.js (which comes with NPM):
https://nodejs.org/download/

Then use NPM to install bower. Type the following in your terminal:
`npm install -g bower`
- the '-g' flag means that you want npm to install this node module globally - so you can use it anywhere else on your machine.

Next up, assuming you have the repo cloned, you will want to run the following commands once you clone this repo.
`bower install`
`npm install`

You now have all the dependencies for this repo installed for both final build and devlopment. Gulp is used to run the development tasks and live reload server. Be sure to follow the directions below to get gulp and running.

##Gulp.js instructions

This file uses gulp.js for general development purposes.

####Install Gulp globally
First, make sure you have installed gulp globally. Run the following command:

`npm install gulp -g`

####Install Gulp and dev dependencies for this repo
Next, to install gulp for this repo and all the required dependencies, run the following command:

`npm install`

####Gulp Tasks

At the moment, we have just a single task in the gulpfile.js. This task lints JavaScript, auto compiles SASS on file change, and runs a development server that live reloads on changes to JavaScripts, SCSS, and HTML pages.

To run this task, type the following command into terminal from the project root (geekin):

`gulp dev`

##SASS compiling instructions

To auto compile SASS:

go to project directory, then enter the following commands:

`cd assets/stylesheets/scss`

`sass --watch main.scss:../css/main.css`

You are now watching for changes to any .scss file that is imported in main.scss.

To add additional files to watch, create the file like so: `_filename.scss` in the assets/stylesheets/scss directory.

Then, add this file to the main.scss file by inserting the following line at the end of the main.scss file: 

`@import 'filename.scss'`
