const bufer = Buffer.from("prabowo is goat", "utf-8");

console.info(bufer.toString());
console.info(bufer.toString("hex"));
console.info(bufer.toString("base64"));

const buferBase64 = Buffer.from("cHJhYm93byBpcyBnb2F0", "base64");
console.info(buferBase64.toString("utf-8"));