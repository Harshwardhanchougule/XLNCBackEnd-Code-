import { Document } from 'mongoose';

export interface IIndustry extends Document {
  name: string;
  imageUrl: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IndustryInput = {
  name: string;
  imageUrl: string;
  description: string;
};