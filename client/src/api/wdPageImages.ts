import axios from 'axios';
import { WDPageImage, WDPageImageFormData } from '../types/wdPageImage';

const API_URL = 'http://localhost:5000/api/wdpageimages';

export const fetchWDPageImages = async (): Promise<WDPageImage[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createWDPageImage = async (formData: FormData): Promise<WDPageImage> => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateWDPageImage = async (
  id: string,
  formData: FormData
): Promise<WDPageImage> => {
  const response = await axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteWDPageImage = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};