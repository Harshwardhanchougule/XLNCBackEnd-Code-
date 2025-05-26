import { useState } from "react";
import axios from "axios";

const useDataItemApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  const createDataItem = async (data: { name: string; url: string }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post("/data-items", data);
      return response.data;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to create data item"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getDataItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get("/data-items");
      return response.data;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to fetch data items"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add similar methods for get, update, delete

  return {
    createDataItem,
    getDataItems,
    loading,
    error,
    clearError: () => setError(null),
  };
};

export default useDataItemApi;