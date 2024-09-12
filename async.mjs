function samplePromise () {
  return Promise.resolve('tara')
}

const name = await samplePromise()
console.info(name)
