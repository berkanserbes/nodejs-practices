// Non-blocking code examples using Promise and async-await

const {readFile} = require('fs');

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
    try{
        const first = await getText('../content/subfolder/first.txt');
        const second = await getText('../content/subfolder/second.txt');
        
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
