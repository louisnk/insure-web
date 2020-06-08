const fs = require('fs');
let Handlebars = require("handlebars");


const fixKeys = (data) => {
  const cleanData = {}

  for (let key in data) {
    const newKey = key.replace(/[:\/]/g, '').trim().replace(/[ -]/g, '_').toUpperCase();


    if (typeof data[key] === 'string') {
      cleanData[newKey] = data[key];
    } else if (Array.isArray(data[key])) {
      cleanData[newKey] = data[key].map((val, i) => {
        if (typeof val === 'string') return val.trim();
        if (Array.isArray(val)) return val.map((v, j) => `${v}`.trim());

      })
    } else if (data[key] && Object.keys(data[key]).length) {
      cleanData[newKey] = fixKeys(data[key])
    }
  }

  return cleanData;
}

const data = require('./sched');
const cleanData = fixKeys(data)

let template = fs.readFileSync('schedule.hbs', 'utf-8');

let compiled = Handlebars.compile(template);

// console.log(cleanData)

const output = compiled(cleanData)

fs.writeFileSync('output.html', output);

console.log('done')
