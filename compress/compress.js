import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs'
import { basename, join } from 'path';
import { pipeline } from 'stream';

import {createAbsolutePath} from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';

export async function compress(pathToFile, pathToDir, ...args) {
    if (args.length) throw new Error('Invalid input');

    const absolutePathToFile = createAbsolutePath(pathToFile);
    const absolutePathToDir = createAbsolutePath(pathToDir);

    if (await checkIsDir(absolutePathToFile) && !(await checkIsDir(absolutePathToDir))) throw new Error('Invalid input');

    const src = await createReadStream(absolutePathToFile);
    const zip = createBrotliCompress();
    const dest = await createWriteStream(join(absolutePathToDir, `${basename(absolutePathToFile)}.gz`));

    pipeline(src, zip, dest, (err) => {
        if (err) console.log(err);
    });
}