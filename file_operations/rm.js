import { rm as remove } from 'fs/promises';

import { createAbsolutePath } from '../createPath.js';
import { checkIsDir } from '../checkIsDir.js';

export async function rm(...args) {
    if (args.length === 0) throw new Error('Operation failed');

    let path = createAbsolutePath(args.join(' '));

    if (await checkIsDir(path)) throw new Error('Operation failed');

    await remove(path);
}