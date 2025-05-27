import { useEffect, useState } from "react";
import useServiceApi from "@/hooks/useServiceApi";
import { IService } from "@/types/service";

const ServicesList = () => {
    const [services, setServices] = useState<IService[]>([]);
    const { getServices, deleteService, loading, error } = useServiceApi();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getServices();
                console.log("Fetched services:", data); // Debug line
                setServices(Array.isArray(data) ? data : []); // Ensure it's always an array
            } catch (err) {
                console.error("Error fetching services:", err);
            }
        };
        fetchServices();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            try {
                await deleteService(id);
                setServices(services.filter(service => service._id !== id));
            } catch (err) {
                console.error("Error deleting service:", err);
            }
        }
    };

    if (loading && services.length === 0) {
        return <div className="text-center py-8">Loading services...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-8">{error}</div>;
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
                                        <img
                                            src={service.iconUrl}
                                            alt={service.name}
                                            className="w-6 h-6 object-contain"
                                        />
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
                            <button
                                onClick={() => handleDelete(service._id)}
                                className="text-red-500 p-2 text-sm hover:bg-red-50 transition-colors"
                            >
                                Delete Service
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesList;