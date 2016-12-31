'use strict';

const childProcess = require('child_process');

const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };

// run 'npm start' on /client as a child process
childProcess.spawn('npm', args, opts);
