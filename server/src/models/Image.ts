// src/models/Image.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IImage extends Document {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
}

const ImageSchema = new Schema<IImage>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IImage>('Image', ImageSchema);