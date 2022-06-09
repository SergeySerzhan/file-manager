import { dirname, join } from 'path';
import { rename } from 'fs/promises';

import {createAbsolutePath} from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';

export async function rn(...args) {
    if (args.length < 2) throw new Error('Invalid input');

    const path = createAbsolutePath(args.slice(0, -1).join(' '));

    if (await checkIsDir(path)) throw new Error('It is directory');

    await rename(path, join(dirname(path), args[args.length - 1]));
}