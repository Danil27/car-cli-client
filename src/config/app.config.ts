import { config } from 'dotenv';
config();

import type { ConfigModuleOptions } from '@nestjs/config';
export const configOptions: ConfigModuleOptions = {
  envFilePath: '.env',
  isGlobal: true,
  cache: true,
};

const PORT = Number(process.env.SERVER_PORT ?? 3030);
const HOST = String(process.env.SERVER_HOST ?? '127.0.0.1');

export const SERVER_URL = `${HOST}:${PORT}`;
