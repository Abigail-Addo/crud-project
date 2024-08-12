import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IItem } from 'src/interfaces/item.interface';
import { ItemDto } from '../../dto/items.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('ItemSchema') private itemModel: Model<IItem>) {}

  public async getItems(): Promise<ItemDto[]> {
    const items = await this.itemModel.find().exec();
    return items;
  }

  public async postItem(newItem: ItemDto) {
    const item = await new this.itemModel(newItem);
    return item.save();
  }

  public async getItemById(_id: string): Promise<any> {
    const item = await this.itemModel.findOne({ _id }).exec();
    if (!item) {
      throw new NotFoundException('Item not found', {
        cause: new Error(),
        description: 'Not found',
      });
    }
    return item.title;
  }

  public async deleteItemById(_id: string): Promise<any> {
    const item = await this.itemModel.findOneAndDelete({ _id }).exec();
    if (!item) {
      throw new NotFoundException('Item not found', {
        cause: new Error(),
        description: 'Not found',
      });
    }
    return 'Item deleted successfully';
  }

  public async updateItemById(
    _id: string,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const item = await this.itemModel
      .findOneAndUpdate(
        { _id },
        { [propertyName]: propertyValue },
        { new: true },
      )
      .exec();
    if (!item) {
      throw new NotFoundException('Item not found', {
        cause: new Error(),
        description: 'Not found',
      });
    }
    return item;
  }
}
