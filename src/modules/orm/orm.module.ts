import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Book} from '../../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Book],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }
