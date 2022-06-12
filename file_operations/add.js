import { open } from 'fs/promises';
import { join } from 'path';

import { getCurrentDirectory } from '../index.js';

export async function add(filename) {
    if (filename.startsWith('.') || filename.startsWith('\\') || filename.startsWith('/')) throw new Error('Operation failed');

    const path = join(getCurrentDirectory(), filename);

    await open(path, 'wx+');
}
