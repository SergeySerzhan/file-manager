import { lstat } from 'fs/promises';

export async function checkIsDir(path) {
    return (await lstat(path)).isDirectory();
}