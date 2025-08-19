import fs from "fs"
import zlib from "zlib"
import { pipeline } from "stream"

const gUnzip = zlib.createGunzip();
const source = fs.createReadStream("output.txt");
const destination = fs.createWriteStream("input.txt");

pipeline(source, gUnzip, destination, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully uncompressed file");
  }
});
