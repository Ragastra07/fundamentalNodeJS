import { URL } from "url";

const url = new URL("https://example.com/path/to/file.txt?query=param#hash");

url.hostname = "gerindra.com";
url.searchParams.append("status", "ketua kelas");

console.info(url.protocol); // Output: https:
console.info(url.hostname); // Output: example.com
console.info(url.pathname); // Output: /path/to/file.txt
console.info(url.searchParams);
console.info(url.href);