const sqlite3 = require('sqlite3').verbose();

let db = null;

function dbConnect (callback = null) {
    db = new sqlite3.Database('./data/library.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Database connected\n");
            if (callback !== null) {
                callback();
            }
        }
    });
}

function dbClose (callback = null) {
    console.log("Closing database");
    db.close(callback);
}

function queryVideos(query = {}) {
    return [{
        name: "Test",
        filename: "Test/Test.mp4",
        shown: []
    }];
}


module.exports = {
    dbConnect, dbClose, queryVideos
}