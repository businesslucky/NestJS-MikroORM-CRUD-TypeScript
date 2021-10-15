import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Book } from './entities';

const logger = new Logger('MikroORM');
const config = {
  entities: [Book],
  dbName: 'allio-test',
  type: 'mysql',
  port: 3306,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
} as Options;

export default config;
