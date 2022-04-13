import { join, basename } from 'path';
import { readDataSync, writeDataSync} from 'indian-ocean';
import notify from 'wsk-notify';

const outDir = 'out';

const data = readDataSync('./in/');
