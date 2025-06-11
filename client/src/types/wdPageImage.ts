export interface WDPageImage {
  _id: string;
  title: string;
  imagePath: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface WDPageImageFormData {
  title: string;
  image?: File | null;
  description?: string;
}