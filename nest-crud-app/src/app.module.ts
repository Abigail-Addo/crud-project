import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(
      'mongodb+srv://addoa350:ygEVAg7BbFZkn7P9@nest-crud.3jj07uc.mongodb.net/?retryWrites=true&w=majority&appName=nest-crud',
    ),
  ],
})
export class AppModule {}
