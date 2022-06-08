import { readdir } from 'fs/promises';

import { getCurrentDirectory } from '../index.js';

export async function ls(...args) {
    if (args.length) throw new Error('Invalid input');

    try {
        const files = await readdir(getCurrentDirectory());
        files.forEach(fileName => {
            process.stdout.write(fileName + '\n');
        })
    } catch(_) {
        throw new Error('Operation failed');
    }
}