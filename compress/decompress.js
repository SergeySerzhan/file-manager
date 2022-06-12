import {createAbsolutePath} from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';
import {createReadStream, createWriteStream} from 'fs';
import {createBrotliDecompress} from 'zlib';
import {basename, join} from 'path';
import {pipeline} from 'stream';

export async function decompress(pathToFile, pathToDir, ...args) {
    if (args.length) throw new Error('Operation failed');

    const absolutePathToFile = createAbsolutePath(pathToFile);
    const absolutePathToDir = createAbsolutePath(pathToDir);

    if (await checkIsDir(absolutePathToFile) && !(await checkIsDir(absolutePathToDir))) throw new Error('Operation failed');

    const src = await createReadStream(absolutePathToFile);
    const unzip = createBrotliDecompress();
    const dest = await createWriteStream(join(absolutePathToDir, `${basename(absolutePathToFile, '.gz')}`));

    pipeline(src, unzip, dest, (err) => {
        if (err) throw new Error('Operation failed');
    });
}