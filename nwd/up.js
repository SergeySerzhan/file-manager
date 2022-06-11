import { join } from 'path';

import { getCurrentDirectory, setCurrentDirectory, changeRlPrompt } from '../index.js';

export function up(...args) {
    if (args.length) throw new Error('Operation failed');

    setCurrentDirectory(join(getCurrentDirectory(), '..'));
    changeRlPrompt();
}