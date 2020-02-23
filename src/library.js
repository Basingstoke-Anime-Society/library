#!/usr/bin/env node

const db = require('./db');
const cli = require('./cli');

db.dbConnect(() => {
    cli.CLI();
});