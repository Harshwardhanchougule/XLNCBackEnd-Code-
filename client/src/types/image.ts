// src/types/image.ts
export interface IImage {
  _id: string;
  name: string;
  description?: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}