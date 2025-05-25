import { Schema, model, Document } from 'mongoose';

export interface IReflection extends Document {
  content: string;
  aiModel: string;
  createdAt: Date;
}

const reflectionSchema = new Schema<IReflection>({
  content: { type: String, required: true },
  aiModel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model<IReflection>('Reflection', reflectionSchema);