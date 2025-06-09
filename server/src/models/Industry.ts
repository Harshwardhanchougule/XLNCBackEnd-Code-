import { Schema, model } from 'mongoose';
import { IIndustry } from '../types/industry.types';

const IndustrySchema = new Schema<IIndustry>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
  },
  { timestamps: true }
);

export default model<IIndustry>('Industry', IndustrySchema);