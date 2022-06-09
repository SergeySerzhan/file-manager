import { join } from 'path';

import { getCurrentDirectory, setCurrentDirectory, changeRlPrompt } from '../index.js';

export function up(...args) {
    if (args.length) throw new Error('Invalid input');

    setCurrentDirectory(join(getCurrentDirectory(), '..'));
    changeRlPrompt();
}