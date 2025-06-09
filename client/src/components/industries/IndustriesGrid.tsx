import { useState, useEffect } from 'react';
import IndustryCard from './IndustryCard';
import IndustryFormModal from './IndustryFormModal';
import { Industry, IndustryFormData } from '../../types/industry';
import {
  fetchIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
} from '../../api/industries';
import { PlusIcon } from 'lucide-react';

const IndustriesGrid = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadIndustries = async () => {
      try {
        setIsLoading(true);
        const data = await fetchIndustries();
        setIndustries(data);
        setError(null);
      } catch (err) {
        setError('Failed to load industries. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadIndustries();
  }, []);

  const handleCreate = () => {
    setCurrentIndustry(null);
    setIsModalOpen(true);
  };

  const handleEdit = (industry: Industry) => {
    setCurrentIndustry(industry);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this industry?')) {
      try {
        await deleteIndustry(id);
        setIndustries(industries.filter((industry) => industry._id !== id));
      } catch (err) {
        setError('Failed to delete industry. Please try again.');
      }
    }
  };

  const handleSubmit = async (formData: IndustryFormData) => {
    try {
      if (currentIndustry) {
        const updatedIndustry = await updateIndustry(currentIndustry._id, formData);
        setIndustries(
          industries.map((industry) =>
            industry._id === currentIndustry._id ? updatedIndustry : industry
          )
        );
      } else {
        const newIndustry = await createIndustry(formData);
        setIndustries([newIndustry, ...industries]);
      }
      setIsModalOpen(false);
    } catch (err) {
      setError(
        currentIndustry
          ? 'Failed to update industry. Please try again.'
          : 'Failed to create industry. Please try again.'
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Industries</h1>
        <button
          onClick={handleCreate}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Industry
        </button>
      </div>

      {industries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No industries found. Add one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <IndustryCard
              key={industry._id}
              industry={industry}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <IndustryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        industry={currentIndustry}
      />
    </div>
  );
};

export default IndustriesGrid;