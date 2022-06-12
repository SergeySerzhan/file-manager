import { join } from 'path';
import { getCurrentDirectory } from './index.js';

export function createAbsolutePath(path) {
    if (path.includes('\/') && path.includes('\\')) throw new Error('Operation failed');

    return path.startsWith('.') ? join(getCurrentDirectory(), path) : join(path);
}