# geekin
Website for geekin radio -- http://www.getgeek.in/

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
