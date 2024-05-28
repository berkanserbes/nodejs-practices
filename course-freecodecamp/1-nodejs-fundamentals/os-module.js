/* Built in Modules
- OS  --> interacting with the operating system as well as the server
- PATH  
- FS
- HTTP
*/

const os = require("os");

console.log(os.homedir()); // C:\Users\berka
console.log(os.hostname()); // Berkan-Matebook16
console.log(os.machine()); // x86_64
console.log(os.version()); // Windows 11 Home Single Language
console.log(os.userInfo()); // { uid: -1, gid: -1, username: 'berka', homedir: 'C:\\Users\\berka', shell: null}
console.log(os.totalmem()); // 16487866368
console.log(os.freemem()); // 8872828928

const currentOs = {
  osVersion: os.version(),
  machineName: os.hostname(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
