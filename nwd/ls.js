import { readdir } from 'fs/promises';

import { getCurrentDirectory } from '../index.js';

export async function ls(...args) {
    if (args.length) throw new Error('Invalid input');

    const files = await readdir(getCurrentDirectory());
    console.log(files);
}