const fs = require('fs');
let Handlebars = require("handlebars");

const data = require('./sched');

let template = fs.readFileSync('schedule.hbs', 'utf-8');

let compiled = Handlebars.compile(template);

const output = compiled(data)

fs.writeFileSync('output.html', output);

console.log('done')