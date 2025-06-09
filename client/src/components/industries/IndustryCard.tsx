import { PencilIcon, TrashIcon } from 'lucide-react';
import { Industry } from '../../types/industry';


interface IndustryCardProps {
  industry: Industry;
  onEdit: (industry: Industry) => void;
  onDelete: (id: string) => void;
}

const IndustryCard = ({ industry, onEdit, onDelete }: IndustryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={industry.imageUrl}
        alt={industry.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{industry.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{industry.description}</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(industry)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            aria-label="Edit industry"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(industry._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Delete industry"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;