const { readFileSync, writeFileSync } = require('fs');

// Read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// Create new file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result ${first}, ${second}`,
  { flag: 'a' }
);
