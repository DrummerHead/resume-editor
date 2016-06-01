var fs = require('fs');
var template = require('./index.js');

var jsonrsume = JSON.parse(fs.readFileSync('/Users/DrummerHead/magic-things/alex-resume/cv-source/alex-universal.json', 'utf-8'));
console.log(jsonrsume);
console.log('\n\n================\n\n');
console.log(typeof jsonrsume)
var render = template.render(jsonrsume);
console.log('\n\n================\n\n');
console.log(render);