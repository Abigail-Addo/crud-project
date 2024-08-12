import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './controller/items/items.controller';
import { ItemsService } from './services/items/items.service';
import { ItemSchema } from 'src/schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ItemSchema',
        schema: ItemSchema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
