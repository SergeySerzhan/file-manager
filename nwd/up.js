import { join } from 'path';

import { getCurrentDirectory, setCurrentDirectory, changeRlPrompt } from '../index.js';

export function up(currentDir, ...args) {
    if (args.length) throw new Error('Invalid input');

    try {
        setCurrentDirectory(join(getCurrentDirectory(), '..'));
        changeRlPrompt();
    } catch(_) {
        throw new Error('Operation failed');
    }

}