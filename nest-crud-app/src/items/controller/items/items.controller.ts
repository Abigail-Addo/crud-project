import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemsService } from 'src/items/services/items/items.service';
import { ItemDto } from '../../dto/items.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  public getItems() {
    return this.itemsService.getItems();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  public postItem(@Body() item: ItemDto) {
    return this.itemsService.postItem(item);
  }

  @Get(':_id')
  public async getItemById(@Param('_id') _id: string) {
    return this.itemsService.getItemById(_id);
  }

  @Delete(':_id')
  public async deleteItem(@Param('_id') _id: string) {
    return this.itemsService.deleteItemById(_id);
  }

  @Put(':_id')
  public async updateItem(@Param('_id') _id: string, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.itemsService.updateItemById(_id, propertyName, propertyValue);
  }
}
