import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync("libZlib.mjs");
const result = zlib.gzipSync(source);

//console.info(result.toString()); // tidak bisa seperti semula karena sudah di compressed
fs.writeFileSync("libZlib.mjs.txt", result);