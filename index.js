import { createInterface } from 'readline';
import { homedir } from 'os';

import { cmds } from './cmds.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function exit() {
    process.stdout.write(`Thank you for using File Manger, ${username}!`);
    process.exit();
}

function printInputError() {
    process.stdout.write('Invalid input\n');
}

function printOperationError() {
    process.stdout.write('Operation failed\n');
}

export function changeRlPrompt() {
    rl.setPrompt(`You are currently in ${currentDir}\n`);
}

export function getCurrentDirectory() {
    return currentDir;
}

export function setCurrentDirectory(dir) {
    if (process.platform === 'win32') dir = dir[0].toUpperCase() + dir.slice(1);
    currentDir = dir;
}

const username = process.argv[2].startsWith('--username') ? process.argv[2].split('=')[1].trim() : 'Anonymous';

let currentDir = homedir();

changeRlPrompt();

process.stdout.write(`Welcome to the File Manager, ${username}!\n`);
rl.prompt();

rl.on('line', async (line) => {
    try {
        if (line.trim() === '.exit') rl.emit('close');

        const lineArgv = line.split(' ');

        const cmd = lineArgv[0].trim();

        if (!Object.hasOwn(cmds, cmd)) {
            printInputError();
            return;
        }

        await cmds[cmd]( ...lineArgv.slice(1));
        rl.prompt()
    } catch(e) {
        if (e.message === 'Invalid input') printInputError();
        else if (e.message === 'Operation failed') printOperationError();
        else process.stdout.write('Unknown error\n');
        rl.prompt();
    }
})

rl.on('close', exit);
