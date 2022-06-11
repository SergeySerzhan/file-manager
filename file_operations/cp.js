import { basename, join } from 'path';
import { copyFile } from 'fs/promises';

import {createAbsolutePath} from '../createPath.js';
import {checkIsDir} from '../checkIsDir.js';

export async function cp(pathToFile, pathToDir, ...args) {
    if (args.length) throw new Error('Operation failed');

    const absolutePathToFile = createAbsolutePath(pathToFile);
    const absolutePathToDir = createAbsolutePath(pathToDir);

    if (await checkIsDir(absolutePathToFile) && !(await checkIsDir(absolutePathToDir))) throw new Error('Operation failed');

    const filename = basename(absolutePathToFile);

    await copyFile(absolutePathToFile, join(absolutePathToDir, filename));
}