// NodeJs default olarak asenkron bir şekilde çalışır.

const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/subfolder/first.txt', 'utf-8', (error, result) => {
    if(error) {
        console.log(error.message);
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/subfolder/second.txt', 'utf-8', (error, result) => {
        if(error) {
            console.log(error.message);
            return;
        }
        console.log(result);
        const second = result
        
        writeFile('./content/subfolder/fs-async.txt', `${first} ${second}`, 'utf-8', (error, result) => {
            if(error) {
                console.log(error.message);
                return;
            }
            console.log(result);
            console.log("async write done")
        })
    })

})

console.log('end');