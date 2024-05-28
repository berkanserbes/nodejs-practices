const {writeFileSync} = require('fs');


for(let i=0; i<1000; i++) {
    writeFileSync('./content/subfolder/bigtext.txt', `${i} - Hello World\n`, {flag: 'a'})
}