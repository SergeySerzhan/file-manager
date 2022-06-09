import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

import { createAbsolutePath } from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';

export async function hash(...args) {
    if (!args.length) throw new Error('Invalid input');

    const path = createAbsolutePath(args.join(' '));

    if (await checkIsDir(path)) throw new Error('Invalid input');

    const content = await readFile(path);

    const hash = createHash('sha256');
    hash.update(content);
    console.log(hash.digest('hex'));
}