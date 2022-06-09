import { open } from 'fs/promises'

import {createAbsolutePath} from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';

export async function cat(...args) {
    let path = createAbsolutePath(args.join(' '));

    if (await checkIsDir(path)) throw new Error('It is directory');

    const content = await (await open(path)).readFile('utf-8');
    console.log(content);
}