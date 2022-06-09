import { cp } from './cp.js';
import { rm } from './rm.js';

export async function mv(pathToFile, pathToDir, ...args) {
    await cp(pathToFile, pathToDir, ...args);
    await rm(pathToFile);
}