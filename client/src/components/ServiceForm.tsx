import { useState } from "react";
import useServiceApi from "@/hooks/useServiceApi";

interface ServiceFormProps {
    onSuccess: () => void;
    onClose?: () => void; // Add onClose prop
}

const ServiceForm = ({ onSuccess, onClose }: ServiceFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        iconUrl: ""
    });
    const { createService, loading, error } = useServiceApi();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createService(formData);
            onSuccess();
            setFormData({ name: "", description: "", iconUrl: "" });
        } catch (err) {
            console.error("Error creating service:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative bg-white p-6 rounded-lg shadow-md">
            {/* Close Icon */}
            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    {/* SVG Close Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="iconUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Icon URL
                </label>
                <input
                    type="url"
                    id="iconUrl"
                    name="iconUrl"
                    value={formData.iconUrl}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
                {loading ? "Creating..." : "Create Service"}
            </button>
        </form>
    );
};

export default ServiceForm;