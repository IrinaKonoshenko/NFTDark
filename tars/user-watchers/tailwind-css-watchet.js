'use strict';

const gulp = tars.packages.gulp;
const runSequence = tars.packages.runSequence.use(gulp);
const chokidar = tars.packages.chokidar;
const watcherLog = tars.helpers.watcherLog;

module.exports = function () {
    return chokidar.watch('markup/**/*.html').on('all', function (event, watchedPath) {
        watcherLog(event, watchedPath);
        runSequence('css:compile-css');
    });
};
