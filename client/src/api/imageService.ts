// src/api/imageService.ts
import axios from "axios";
import { IImage } from "../types/image";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const uploadImage = async (formData: FormData): Promise<IImage> => {
  try {
    const response = await api.post("/api/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImages = async (): Promise<IImage[]> => {
  try {
    const response = await axios.get("/api/images");

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export const deleteImage = async (id: string): Promise<void> => {
  try {
    await axios.delete("/api/images");
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};
