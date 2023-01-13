import { join, basename } from 'path';
import { readDataSync } from 'indian-ocean';
import { writeSync, sleep } from '@mhkeller/utils';
import notify from 'wsk-notify';

const outDir = '0_out';

const data = readDataSync('./0_in/');

// for (let i = 0; i < Infinity; i += 1) {
// 	await sleep(1_000);
// 	debugger
// }
