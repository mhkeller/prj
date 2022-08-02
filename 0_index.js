import { join, basename } from 'path';
import { readDataSync } from 'indian-ocean';
import { writeSync } from '@mhkeller/utils';
import notify from 'wsk-notify';

const outDir = '0_out';

const data = readDataSync('./0_in/');
