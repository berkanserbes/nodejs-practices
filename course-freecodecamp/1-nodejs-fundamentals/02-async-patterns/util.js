// Non-blocking code examples 

const {readFile, writeFile} = require('fs');  // const {readFile, writeFile} = require('fs').promises;  easiest way of same thing
 
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, result) => {
            if(err) {
                reject(err);
            }
            resolve(result);
        })
    })
}

const readFromTextAsync = async () => {
    try {
        const first = await readFilePromise('../content/subfolder/first.txt');
        const second = await readFilePromise('../content/subfolder/second.txt');
        await writeFilePromise('../content/subfolder/third.txt', `${first} ${second}`, 'utf-8');
        
        console.log(`first: ${first}`)
        console.log(`second: ${second}`)
    }
    catch(error) {
        console.log(error)
    }
}

readFromTextAsync();

/*
first: Hello
second: World
*/
