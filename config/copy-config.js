import path from "path"
import fs from "fs"

function copyFiles(from, to, overwrite = false) {
  return {
    name: 'copy-files',
    generateBundle() {
      const log = msg => console.log('\x1b[36m%s\x1b[0m', msg)
      log(`copy files: ${from} → ${to}`)
      fs.readdirSync(from).forEach(file => {
        console.log(file);
        const fromFile = `${from}/${file}`
        const toFile = `${to}/${file}`
        if (fs.existsSync(toFile) && !overwrite)
          return
        log(`• ${fromFile} → ${toFile}`)
        fs.copyFileSync(
          path.resolve(fromFile),
          path.resolve(toFile)
        )
      })
    }
  }
}

export default copyFiles;
