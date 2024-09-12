function samplePromise(){
    return Promise.resolve("tara");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();

// perlu menggunakan async function jika tanpa .mjs