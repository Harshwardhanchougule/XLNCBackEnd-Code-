import { useState } from "react";
import axios from "axios";
import { IService } from "@/types/service";

const useServiceApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  const createService = async (serviceData: Omit<IService, "_id">) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post("/api/services", serviceData);
      return response.data;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to create service"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get("/api/services");
      return response.data;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to fetch services"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await api.delete(`/services/${id}`);
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "Failed to delete service"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createService,
    getServices,
    deleteService,
    loading,
    error,
    clearError: () => setError(null),
  };
};

export default useServiceApi;
