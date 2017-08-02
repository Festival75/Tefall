module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('79p-qUCnJpQcrrOOIhGdbt_a7yZ9lpj0'))
            .pipe($.gulp.dest('./build/static/img/'));
    });
};
