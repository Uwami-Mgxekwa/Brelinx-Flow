const { spawn } = require('child_process')
const { app } = require('electron')

// Start Vite dev server
console.log('Starting Vite dev server...')
const viteProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
})

// Wait a bit for Vite to start, then launch Electron
setTimeout(() => {
  console.log('Starting Electron...')
  const electronProcess = spawn('electron', ['.'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' }
  })

  electronProcess.on('close', () => {
    viteProcess.kill()
    process.exit()
  })
}, 3000)

process.on('SIGINT', () => {
  viteProcess.kill()
  process.exit()
})