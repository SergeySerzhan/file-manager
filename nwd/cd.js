import { checkIsDir } from '../checkIsDir.js';
import { setCurrentDirectory, changeRlPrompt } from '../index.js';
import { createAbsolutePath } from '../createPath.js';

export async function cd(...args) {
    let newPath = createAbsolutePath(args.join(' '));

    if (!(await checkIsDir(newPath))) throw new Error('It is file');
    setCurrentDirectory(newPath);
    changeRlPrompt();
}