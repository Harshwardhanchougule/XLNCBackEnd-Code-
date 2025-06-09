// src/components/ServiceList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Service {
  _id: string;
  name: string;
  description: string;
  iconUrl: string;
  createdAt: string;
}
const ServiceList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log('Fetching services...'); // Debug log
        const response = await axios.get<Service[]>('http://localhost:5000/api/services');
        console.log('API Response:', response); // Debug log
        setServices(response.data);
      } catch (err) {
        console.error('Fetch error:', err); // Debug log
        setError('Failed to fetch services. Please check console for details.');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3">Loading services...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
  if (services.length === 0) {
    return (
      <div className="text-center py-10">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No services found</h3>
        <p className="mt-1 text-sm text-gray-500">Create your first service to get started.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto animate-width" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="bg-white rounded-xl overflow-hidden 
                      transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                      border border-gray-200 h-[220px] flex flex-col cursor-pointer
                      animate-slideUp"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6 flex-1 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 
                                  text-white mr-3 shadow-lg transform transition-all duration-300
                                  group-hover:scale-110 group-hover:rotate-6"
                  >
                    {/* Replace with actual icon component or image */}
                    {service.iconUrl && (
                      <div className="flex justify-center mb-4">
                        {service.iconUrl.startsWith('data:image') ? (
                          <img
                            src={service.iconUrl}
                            alt={service.name}
                            className="h-16 w-16 object-contain"
                          />
                        ) : (
                          <img
                            src={`http://localhost:5000${service.iconUrl}`}
                            alt={service.name}
                            className="h-16 w-16 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder-icon.png';
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight
                                  transform transition-all duration-300 group-hover:translate-x-2">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed
                              transform transition-all duration-300 group-hover:translate-y-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;