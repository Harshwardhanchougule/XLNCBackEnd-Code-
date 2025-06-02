// src/components/ImageGallery.tsx
import { useState } from 'react';
import { IImage } from '@/types/image';
import { getImages, uploadImage } from '@/api/imageService';
import ImagePopup from '@/components/ImagesUplode/ImagePopup';
import { useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImages();
        setImages(data);
      } catch (err) {
        setError('Failed to load images');
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleAddImage = async (newImage: IImage) => {
    setImages([newImage, ...images]); // Optimistic update
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
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Image Gallery</h1>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Image
        </button>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No images yet</h3>
          <p className="mt-1 text-sm text-gray-500">Click "Add Image" to upload your first image.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(images) && images.map((image) => (                    <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative pb-[100%]"> {/* Square aspect ratio */}
                <img
                  src={image.imageUrl.startsWith('http') ? image.imageUrl : `http://localhost:000${image.imageUrl}`}
                  alt={image.name}                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg truncate">{image.name}</h3>
                {image.description && (
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{image.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Image Popup */}
      <ImagePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddImage={handleAddImage}
      />
    </div>
  );
};

export default ImageGallery;