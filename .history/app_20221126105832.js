const { readFileSync, writeFileSync } = require('fs');
const { readFile } = require('fs/promises');

readFile('./content/first.txt', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
