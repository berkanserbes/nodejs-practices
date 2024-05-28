/* Built in Modules
- OS  --> interacting with the operating system as well as the server
- PATH --> 
- FS
- HTTP
*/

const path = require("path");

// console.log(path);
console.log(
  path.dirname("C:\\Development\\nodejs\\course-freecodecamp\\path-module.js")
); // C:\Development\nodejs\course-freecodecamp

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // C:\Development\nodejs\course-freecodecamp\content\subfolder\test.txt
