import axios from 'axios';
import { Industry, IndustryFormData } from '../types/industry';

const API_URL = 'http://localhost:5000/api/industries';

export const fetchIndustries = async (): Promise<Industry[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createIndustry = async (
  industryData: IndustryFormData
): Promise<Industry> => {
  const response = await axios.post(API_URL, industryData);
  return response.data;
};

export const updateIndustry = async (
  id: string,
  industryData: IndustryFormData
): Promise<Industry> => {
  const response = await axios.put(`${API_URL}/${id}`, industryData);
  return response.data;
};

export const deleteIndustry = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};