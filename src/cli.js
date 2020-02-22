

function pad(str, digits, char = " ") {

}

function padLeft(str, digits, char = " ") {

}


function showVideo(video) {
    if (video === null) {
        return;
    }

    console.log("Name:     "+video.name);
    console.log("");
}


function CLI() {
    
}

module.exports = {
    showVideo, CLI
}