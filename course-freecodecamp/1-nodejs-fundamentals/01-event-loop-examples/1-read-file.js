// Event Loop registers the callback functions

const {readFile, writeFile} = require('fs');

console.log('started first task');

readFile('../content/subfolder/first_second.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err.message);
    }
    console.log(result);
    console.log('second task done');
})

console.log('last task done')

/*
started first task
last task done
Here is the result: Hello World
second task done
*/
