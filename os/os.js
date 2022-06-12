import { EOL, cpus, homedir, userInfo } from 'os';

export function os(...args) {
    if (args.length !== 1) throw new Error('Operation failed');

    switch (args[0]) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            const cpusResult = cpus();
            console.log(`Overall amount of CPUs is ${cpusResult.length}.\n`, cpusResult.map(cpuObj => {
                const {times, ...newObj} = cpuObj;
                newObj.speed = newObj.speed / 1000;
                return newObj;
            })
        );
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(process.arch);
            break;
        default:
            throw new Error('Operation failed');
    }
}