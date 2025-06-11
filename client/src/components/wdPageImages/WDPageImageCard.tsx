import { PencilIcon, TrashIcon } from 'lucide-react';
import { WDPageImage } from '../../types/wdPageImage';

interface WDPageImageCardProps {
  image: WDPageImage;
  onEdit: (image: WDPageImage) => void;
  onDelete: (id: string) => void;
  isMutating: boolean;
}

const WDPageImageCard = ({ image, onEdit, onDelete, isMutating }: WDPageImageCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={`http://localhost:5000${image.imagePath}`}
          alt={image.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{image.title}</h3>
        {image.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{image.description}</p>
        )}
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(image)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50"
            disabled={isMutating}
            aria-label="Edit image"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(image._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
            disabled={isMutating}
            aria-label="Delete image"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WDPageImageCard;