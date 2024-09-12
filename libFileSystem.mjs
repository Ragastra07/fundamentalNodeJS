// libary untuk memanipulasi file :)

import fsp from 'fs/promises'
import fs from 'fs'

const buffer = await fsp.readFile('libFileSystem.mjs')

console.info(buffer.toString())

fs.readFile('libPATH.mjs', (err, data) => {
  if (err) {
    console.error(err) // Handle errors appropriately
  } else {
    console.info(data.toString())
  }
})

await fsp.writeFile("expWRITE.txt", "ini hasil fs.writeFile pada libFileSystem.mjs");