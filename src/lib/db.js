const sqlite3 = require('sqlite3').verbose();

let db = null;

function dbConnect (callback = null) {
    let filename = __dirname+'/../../data/library.db';
    console.log(filename);
    db = new sqlite3.Database(filename, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            if (callback !== null) {
                callback();
            }
        }
    });
}

function dbClose (callback = null) {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        if (callback !== null) {
            callback();
        }
    });
    
}

function allVideos() {

}

module.exports = {
    dbConnect, dbClose, allVideos
}