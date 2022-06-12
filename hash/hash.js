import { createHash } from 'crypto';

import { createAbsolutePath } from '../createPath.js';
import { createReadStream } from 'fs';
import { checkIsDir } from '../checkIsDir.js';
import { getWriteToStdout } from '../getWriteToStdout.js';
import { pipeline } from 'stream/promises';

export async function hash(...args) {
    if (!args.length) throw new Error('Operation failed');

    const path = createAbsolutePath(args.join(' '));

    if (await checkIsDir(path)) throw new Error('Operation failed');

    const hash = createHash('sha256');
    const readStr = createReadStream(path);
    const myWriteStream = getWriteToStdout();
    await pipeline(readStr, hash.setEncoding('hex'), myWriteStream);
}