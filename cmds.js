import { up } from './nwd/up.js';
import { cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';

export const cmds = {
    'up': up,
    'cd': cd,
    'ls': ls,
};