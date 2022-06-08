import { join } from 'path';

import { checkIsDir } from '../checkIsDir.js';
import { getCurrentDirectory, setCurrentDirectory, changeRlPrompt } from '../index.js';

export async function cd(...args) {
    if (args.length !== 1) throw new Error('Invalid input');

    try {
        let newPath = args[0].startsWith('.') ? join(getCurrentDirectory(), args[0]) : join(...args[0].split('/'));

        if (!(await checkIsDir(newPath))) throw new Error('It is file');
        setCurrentDirectory(newPath);
        changeRlPrompt();
    } catch(_) {
        throw new Error('Operation failed');
    }
}