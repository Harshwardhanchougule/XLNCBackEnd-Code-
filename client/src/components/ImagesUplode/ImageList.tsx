// src/components/ImageList.tsx
import { useEffect, useState } from 'react';
import { IImage } from '@/types/image';
import { getImages, deleteImage } from '@/api/imageService';

const ImageList = ({ refreshKey }: { refreshKey: number }) => {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await getImages();
        setImages(data);
        setError('');
      } catch (err) {
        setError('Failed to load images. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [refreshKey]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteImage(id);
        setImages(images.filter(image => image._id !== id));
      } catch (err) {
        setError('Failed to delete image. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.isArray(images) && images.map((image) => (
        <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img 
              src={`http://localhost:000${image.imageUrl}`} 
              alt={image.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-image.png';
              }}
            />
            <button
              onClick={() => handleDelete(image._id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
              aria-label="Delete image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{image.name}</h3>
            {image.description && (
              <p className="text-gray-600 text-sm">{image.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;