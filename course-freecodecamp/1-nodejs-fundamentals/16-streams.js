// Streams are used to read or write sequentially
// There are 4 types of streams.
// 1 - Writeable
// 2 - Readable
// 3 - Duplex
// 4 - Transform

// Streams extend event emitters class

const { createReadStream, WriteStream, ReadStream } = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/subfolder/bigtext.txt', { highWaterMark: 90000 })
// const stream = createReadStream'./content/subfolder/bigtext.txt', { encoding: 'utf8' })
//const stream = createReadStream('./content/subfolder/bigtext.txt')

const stream = createReadStream("./content/subfolder/bigtext.txt", "utf-8");

stream.on("data", (result) => {
  console.log(result);
});
