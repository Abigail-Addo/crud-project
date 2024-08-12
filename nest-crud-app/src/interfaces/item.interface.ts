import { Document } from 'mongoose';

export interface IItem extends Document {
  title: string;
  description: string;
}
