// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./names"); // or destructuring: const { john, peter } = require("./names");
const sayHi = require("./sayHi");
const data = require("./info3");
require("./mind-grenade"); // Berkan Serbes

console.log(names); // { john: 'john', peter: 'peter' }
console.log(names.john); // john
console.log(names.peter); // peter

console.log(sayHi); // [Function: sayHi]

sayHi(names.john); // Hello there john

console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
