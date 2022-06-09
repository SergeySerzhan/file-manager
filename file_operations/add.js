import { open } from 'fs/promises';
import { join } from 'path';

import { getCurrentDirectory } from '../index.js';

export async function add(filename) {
    const path = join(getCurrentDirectory(), filename);

    await open(path, 'wx+');
}