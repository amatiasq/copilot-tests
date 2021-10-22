// open file passed as parameter
var fs = require('fs');
var file = process.argv[2];
var content = fs.readFileSync(file, 'utf8');

// replace all instances of "hello" with "hi"
var newContent = content.replace(/hello/g, 'hi');

// write new content to filename passed as second parameter
fs.writeFileSync(process.argv[3], newContent, 'utf8');
