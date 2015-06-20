# geekin
Website for geekin radio -- http://www.getgeek.in/

To auto compile SASS:

go to project directory, then enter the following commands:

`cd assets/stylesheets/scss`

`sass --watch main.scss:../css/main.css`

You are now watching for changes to any .scss file that is imported in main.scss.

To add additional files to watch, create the file like so: `_filename.scss` in the assets/stylesheets/scss directory.

Then, add this file to the main.scss file by inserting the following line at the end of the main.scss file: 

`@import 'filename.scss'`
