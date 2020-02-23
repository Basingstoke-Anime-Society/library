#!/usr/bin/env node

const db = require('./db');
const cli = require('./cli');

db.dbConnect(() => {
    // TEST 1: get any video
    (() => {
        console.log("TEST 1");
        let videos = query.queryVideos({});

        videos.forEach(video => {
            cli.showVideo(video);
        });
    })();

    // TEST 2: get a video by name

    db.dbClose();
});
