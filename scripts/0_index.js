import { join, basename } from 'path';
import { readDataSync } from 'indian-ocean';
import { writeSync, sleep, initLogProgress, commas } from '@mhkeller/utils';
import notify from '@mhkeller/notify';
import 'dotenv/config';

const outDir = 'out/0_out';

const data = readDataSync('./in/0_in/');

// for (let i = 0; i < Infinity; i += 1) {
// 	await sleep(1_000);
// 	debugger
// }
