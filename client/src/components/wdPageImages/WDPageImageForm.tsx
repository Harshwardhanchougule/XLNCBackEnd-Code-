import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { WDPageImage, WDPageImageFormData } from '../../types/wdPageImage';


interface WDPageImageFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  image?: WDPageImage | null;
  isSubmitting: boolean;
}

const WDPageImageForm = ({
  isOpen,
  onClose,
  onSubmit,
  image,
  isSubmitting,
}: WDPageImageFormProps) => {
  const [formData, setFormData] = useState<WDPageImageFormData>({
    title: '',
    description: '',
    image: null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      setFormData({
        title: image.title,
        description: image.description || '',
        image: null,
      });
      setPreview(`http://localhost:5000${image.imagePath}`);
    } else {
      setFormData({
        title: '',
        description: '',
        image: null,
      });
      setPreview(null);
    }
  }, [image]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    if (formData.description) {
      formDataObj.append('description', formData.description);
    }
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    await onSubmit(formDataObj);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          {/* <XMarkIcon className="h-6 w-6" /> */}
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {image ? 'Edit Image' : 'Add New Image'}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength={100}
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image *
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <div className="flex flex-col items-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover rounded-md mb-2 cursor-pointer"
                    onClick={triggerFileInput}
                  />
                ) : (
                  <div
                    className="h-48 w-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer mb-2"
                    onClick={triggerFileInput}
                  >
                    <p className="text-gray-500">Click to upload image</p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="text-sm text-blue-600 hover:text-blue-800"
                  disabled={isSubmitting}
                >
                  {preview ? 'Change Image' : 'Select Image'}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={500}
                disabled={isSubmitting}
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={isSubmitting || (!image && !formData.image)}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {image ? 'Updating...' : 'Uploading...'}
                  </span>
                ) : (
                  image ? 'Update' : 'Upload'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WDPageImageForm;