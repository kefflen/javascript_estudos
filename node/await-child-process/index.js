const { fork, exec, spawn } = require('child_process')

const child = fork(`${__dirname}/backend/src/server`, {
  env: {
    PARENT_KEY: 'key'
  }
})


child.on('message', data => {
  console.log({data})
  exec(`start node ${__dirname}/otherProcess.js`)
})