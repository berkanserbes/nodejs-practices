const {readFileSync, writeFileSync, appendFileSync} = require("fs");

const first = readFileSync('./content/subfolder/first.txt','utf-8');
console.log(first);

const second = readFileSync('./content/subfolder/second.txt', 'utf-8');
console.log(second);

//writeFileSync('./content/subfolder/first.txt', "Hello", 'utf-8');
//writeFileSync('./content/subfolder/second.txt', "World", 'utf-8');

appendFileSync('./content/subfolder/first_second.txt', `Here is the result: ${first} ${second}`) // Third parameter, {flag: 'a'} --> it means append to file