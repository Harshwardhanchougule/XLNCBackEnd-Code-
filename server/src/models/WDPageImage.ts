import { Schema, model } from 'mongoose';

export interface IWDPageImage {
  save(): unknown;
  title: string;
  imagePath: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const WDPageImageSchema = new Schema<IWDPageImage>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    imagePath: {
      type: String,
      required: [true, 'Image path is required'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
  },
  { timestamps: true }
);

export default model<IWDPageImage>('WDPageImage', WDPageImageSchema);