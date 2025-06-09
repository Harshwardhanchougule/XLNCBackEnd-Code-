export interface Industry {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IndustryFormData {
  name: string;
  imageUrl: string;
  description: string;
}