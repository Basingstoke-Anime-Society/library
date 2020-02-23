const readline = require('readline');

require('colors');

const db = require('./db');
const query = require('./query');


const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pad(str, digits, char = " ") {

}

function padLeft(str, digits, char = " ") {

}


function showVideo(video) {
    if (video === null) {
        return;
    }

    console.log("   Name:     ".grey+video.name);
    console.log("");
}

function showIntro() {
    console.log("   Video Library\n");
}

function ask() {
    interface.question(" → ".bold.yellow, (answer) => {
        answer = answer.trim();
        switch (answer) {
            case 'exit':
                db.dbClose();
                process.exit(0);
                break;

            default:
                let q = query.parseQuery(answer);
                let videos = query.queryVideos(q);

                console.log("");
                videos.forEach((video) => {
                    showVideo(video);
                });
        }

        ask();
    });
}

function CLI() {
    showIntro();
    ask();
}

module.exports = {
    showVideo, CLI
}