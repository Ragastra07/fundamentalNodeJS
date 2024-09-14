import dns from "dns/promises";

const ipGoogle = await dns.lookup("www.google.com");


console.info(ipGoogle);
console.info(ipGoogle.address);
console.info(ipGoogle.family);