import fs from 'fs';

const writer = fs.createWriteStream("target.log");

writer.write("Hello, World!\n");
writer.write("This is a test.");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString()); //default nya adalah buffer jadi harus di konverted
});