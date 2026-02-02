const { build } = require('vite')
const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

async function buildElectron() {
  console.log('Building renderer process...')
  
  // Build the renderer process (React app)
  await build()
  
  console.log('Building main process...')
  
  // Create dist-electron directory
  if (!fs.existsSync('dist-electron')) {
    fs.mkdirSync('dist-electron')
  }
  
  // Compile TypeScript files for Electron
  const tsc = spawn('npx', ['tsc', '--project', 'electron/tsconfig.json'], {
    stdio: 'inherit',
    shell: true
  })
  
  tsc.on('close', (code) => {
    if (code === 0) {
      console.log('Electron build completed successfully!')
    } else {
      console.error('Electron build failed!')
      process.exit(1)
    }
  })
}

buildElectron().catch(console.error)