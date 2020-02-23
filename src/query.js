const db = require('./db');

function parseQuery(str) {
    let query = {
        terms: [],
        number: 1
    };

    str.split(/ /).forEach(word => {
        word = word.trim();
        if (word == "") {
            return;
        }

        if (word.match(/[0-9]+/)) {
            query.number = parseInt(word);
            return;
        }

        query.terms.push(word);
    });

    return query;
}

function queryVideos(query) {
    let results = [];
    for (var i = 0; i < query.number; i++) {
        results.push({
            name: "Test",
            filename: "Test/Test.mp4",
            shown: []
        });
    }
    return results;
}

module.exports = {
    parseQuery, queryVideos
}