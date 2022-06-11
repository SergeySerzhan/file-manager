import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';

import { createAbsolutePath } from '../createPath.js';
import { checkIsDir } from '../checkIsDir.js';
import { getWriteToStdout } from '../getWriteToStdout.js';

export async function cat(...args) {
    let path = createAbsolutePath(args.join(' '));

    if (await checkIsDir(path)) throw new Error('It is directory');

    const myWriteStream = getWriteToStdout();
    const fileReadStr = createReadStream(path, 'utf-8');
    await pipeline(fileReadStr, myWriteStream);
}
