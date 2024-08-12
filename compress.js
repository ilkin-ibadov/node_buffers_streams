const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

const gzip = zlib.createGzip();
const source = fs.createReadStream("input.txt");
const destination = fs.createWriteStream("output.txt");

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully compressed file");
  }
});
