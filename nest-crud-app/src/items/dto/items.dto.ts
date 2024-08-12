import { IsNotEmpty } from 'class-validator';

export class ItemDto {
  @IsNotEmpty()
  title: string;
  description: string;
}
