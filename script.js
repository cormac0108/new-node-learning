// import largeNumber from 'script2.js'   not this way
const script2 = require('./script2.js')
//different modules
//filesystem
// const script2 = require('fs').readFile;
//http
// const script2 = require('http');

// install nodemon.   npm install nodemon --save-dev
// npm init -y    -to init a package.json and -y to accept prompts. 

const a =4;
const b=5;
console.log(a + b);

setTimeout(() => {
    console.log('banana');

}, 3000)

console.log(__dirname); //log the directory name. 

// global.setTimeout

// const c = largeNumber; not this
const c = script2.largeNumber;
console.log(c);

console.log(c + b)

// to import modules we have to do somehting else.

// different modules - the fs module. file system.  
//nodemon listens to changes and logs them so you dont have 
// to keep running the file