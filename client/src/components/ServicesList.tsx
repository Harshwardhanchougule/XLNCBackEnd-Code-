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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
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
              
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h2>
              
              <div className="prose prose-sm text-gray-600 mb-4">
                {service.description.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                Created: {new Date(service.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;