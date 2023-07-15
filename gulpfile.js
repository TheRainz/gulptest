// Looking to replace "Theme1" with some type of wildcard or relative folder setup 
// that will update each respective less to css

var gulp = require('gulp'),
  less = require('gulp-less'),
  watch = require('gulp-watch');

// Looking for this to handle all themes regardless of name, ie Theme1, Theme2, BlueTheme, Dark etc.
var paths = {
  styles: {
    src: ['Themes/Theme1/Styles/nmCore.less'],
    dest: 'Themes/Theme1/Content/css'
  }
};

function styles() {
  return gulp
    .src(paths.styles.src, {
      sourcemaps: true,
    })
    .pipe(less())
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch all the .less files, then run the less task
gulp.task('watch', function () {
  //gulp.watch('Pages/Merchants /**/*.less', styles);
  gulp.watch('Themes/Theme1/Styles/*.less', styles);
});

// Default will run the 'entry' watch task
gulp.task('default', gulp.series('watch'));