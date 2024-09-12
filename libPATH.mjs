import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Menggabungkan path
const joinedPath = path.join(__dirname, 'data', 'users.json');
console.log(joinedPath); // Output: /path/to/your/project/data/users.json (sesuai dengan direktori saat ini)

// Memisahkan path
const parsedPath = path.parse(joinedPath);
console.log(parsedPath);
// Output: { root: '/', dir: '/path/to/your/project/data', base: 'users.json', ext: '.json', name: 'users' }

// Mendapatkan nama file tanpa ekstensi
const filename = path.basename(joinedPath, '.json');
console.log(filename); // Output: users

// Mendapatkan direktori induk
const dirname = path.dirname(joinedPath);
console.log(dirname); // Output: /path/to/your/project/data

// Membuat path menjadi absolut
const absolutePath = path.resolve('data', 'file.txt');
console.log(absolutePath); // Output: /path/to/your/project/data/file.txt

// Menormalisasi path
const normalizedPath = path.normalize('/.././users//data/');
console.log(normalizedPath); // Output: /users/data
