REPL - playing around
// Accept each line with ENTER
> node
> const name = "john"
> name
close the REPLe
> CTR + C

CLI - everything else
// run app in terminal
> node app.js

// GLOBAL VARIABLES - NO WINDOW!!!

// __dirname  - path to currect directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);

// clear console
> clear

// history of command
// click arrow up in terminal


/* MODULES IN NODE */
// node uses commonJS
