import os from "os";

// info dasar OS
console.info('Nama sistem operasi:', os.type());
console.info('Versi sistem operasi:', os.version());
console.info('Platform:', os.platform());
console.info('Arsitektur:', os.arch());
console.info('Hostname:', os.hostname());
console.info('Informasi CPU:', os.cpus());
console.info('Jumlah CPU:', os.cpus().length);
console.info('Total memori sistem (dalam bytes):', os.totalmem());
console.info('Memori bebas (dalam bytes):', os.freemem());

// info direktori
console.info('Direktori home pengguna:', os.homedir());

// runtime sistem
console.info('Waktu saat ini (dalam milliseconds):', os.uptime());

// network interface
const networkInterfaces = os.networkInterfaces();
console.info('Network interfaces:', networkInterfaces);

// Mendapatkan informasi tentang temporary directory
console.info('Temporary directory:', os.tmpdir());

// Mendapatkan informasi tentang constant yang berkaitan dengan sistem operasi
console.info('EOL (End of Line):', os.EOL);