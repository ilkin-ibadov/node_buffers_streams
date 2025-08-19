// // Create a buffer of length 10, filled with zeros
// const buf1 = Buffer.alloc(10);

// // Create a buffer with a specific value
// const buf2 = Buffer.alloc(10, 1);

// // Create an uninitialized buffer (faster but may contain old data)
// const buf3 = Buffer.allocUnsafe(10);

// // Create a buffer from an array
// const buf4 = Buffer.from([1, 2, 3]);

// // Create a buffer from a string
// const buf5 = Buffer.from('hello');

// const buf6 = Buffer.alloc(10);
// buf6.write('hello'); // Write string to buffer
// buf6.writeUInt8(255, 5); // Write an unsigned 8-bit integer at offset 5

// const buf7 = Buffer.from('hello');
// console.log(buf7.toString()); // 'hello'
// console.log(buf7[0]); // 104 (ASCII code for 'h')
// console.log(buf7.readUInt8(0)); // 104

// const buf11 = Buffer.from('hello ');
// const buf22 = Buffer.from('world');
// const buf33 = Buffer.concat([buf1, buf2]);
// console.log(buf33.toString()); // 'hello world'

// const bufJson = Buffer.from('hello');
// console.log(bufJson.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }

// import fs from "fs";
// const readableStream = fs.createReadStream("input.txt", { encoding: "utf8" });

// readableStream.on("data", (chunk) => {
//   console.log("Received:", chunk);
// });

// readableStream.on('end', () => {
//   console.log('End of file');
// });

// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('Hello, world!');
// writableStream.end(); // Close the stream

// const readableStream = fs.createReadStream('input.txt');
// const writableStream = fs.createWriteStream('output.txt');

// // readableStream.pipe(writableStream);

// import { Transform } from 'stream';

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });

// readableStream.pipe(upperCaseTransform).pipe(writableStream);
