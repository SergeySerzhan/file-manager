import { up } from './nwd/up.js';
import { cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';

import { cat } from './file_operations/cat.js';
import { add } from './file_operations/add.js';
import { rn } from './file_operations/rn.js';
import { cp } from './file_operations/cp.js';
import { rm } from './file_operations/rm.js';
import { mv } from './file_operations/mv.js';

import { os } from './os/os.js';

import { hash } from './hash/hash.js';

export const cmds = {
    'up': up,
    'cd': cd,
    'ls': ls,
    'cat': cat,
    'add': add,
    'rn': rn,
    'cp': cp,
    'rm': rm,
    'mv': mv,
    'os': os,
    'hash': hash,
};