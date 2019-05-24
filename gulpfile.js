const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
         // 1 Where is my scss file
         return gulp.src('./scss/**/*.scss')
         // 2. Pass file through sass comipler
        .pipe(sass().on('error', sass.logError))
         // 3. Where do i save compiled css
        .pipe(gulp.dest('./css'))
        // 4. stream changes to all browsers
        .pipe(browserSync.stream());
        
};

// watch for changes and update 
function watch(){
    browserSync.init({
        // set up server
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', style).on('change', browserSync.reload);

    
}


exports.style = style;
exports.watch = watch;