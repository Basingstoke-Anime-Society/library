#!/usr/bin/env node

const db = require('./lib/db');
const cli = require('./lib/cli');

db.dbConnect(() => {
    cli.CLI();
});