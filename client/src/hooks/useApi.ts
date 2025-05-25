import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  });

  const get = async (url: string) => {
    try {
      setLoading(true);
      const response = await api.get(url);
      return response.data;
    } catch (err) {
      setError("Failed to fetch data");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const post = async (url: string, data: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post(url, data);
      return response.data;
    } catch (err) {
      console.error("API Error:", err); // Add detailed logging
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to post data"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { get, post, loading, error, clearError: () => setError(null) };
};

export default useApi;
