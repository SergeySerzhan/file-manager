import { Writable } from 'stream';

export function getWriteToStdout() {
    return new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });
}