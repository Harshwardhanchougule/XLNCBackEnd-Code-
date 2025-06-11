import { useState, useEffect } from 'react';
import WDPageImageCard from './WDPageImageCard';
import WDPageImageForm from './WDPageImageForm';
import { WDPageImage } from '../../types/wdPageImage';
import {
    fetchWDPageImages,
    createWDPageImage,
    updateWDPageImage,
    deleteWDPageImage,
} from '../../api/wdPageImages';
import { PlusIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const WDPageImagesGrid = () => {
    const [images, setImages] = useState<WDPageImage[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<WDPageImage | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMutating, setIsMutating] = useState(false);

    const loadImages = async () => {
        try {
            setIsLoading(true);
            const data = await fetchWDPageImages();
            setImages(data);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to load images' });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadImages();
    }, []);

    const handleCreate = () => {
        setCurrentImage(null);
        setIsModalOpen(true);
    };

    const handleEdit = (image: WDPageImage) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            try {
                setIsMutating(true);
                await deleteWDPageImage(id);
                setImages(images.filter((image) => image._id !== id));
                toast({ title: 'Success', description: 'Image deleted successfully' });
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete image' });
            } finally {
                setIsMutating(false);
            }
        }
    };

    const handleSubmit = async (formData: FormData) => {
        try {
            setIsMutating(true);

            if (currentImage) {
                // Update existing image
                const updatedImage = await updateWDPageImage(currentImage._id, formData);
                setImages(
                    images.map((image) =>
                        image._id === currentImage._id ? updatedImage : image
                    )
                );
                toast({ title: 'Success', description: 'Image updated successfully' });
            } else {
                // Create new image
                const newImage = await createWDPageImage(formData);
                setImages([newImage, ...images]);
                toast({ title: 'Success', description: 'Image uploaded successfully' });
            }

            setIsModalOpen(false);
        } catch (error) {
            toast({
                title: 'Error',
                description: currentImage
                    ? 'Failed to update image'
                    : 'Failed to upload image'
            });
        } finally {
            setIsMutating(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        loadImages(); // Refresh data when modal is closed
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">WD Page Images</h1>
                <button
                    onClick={handleCreate}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    disabled={isMutating}
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add Image
                </button>
            </div>

            {images.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">No images found</p>
                    <button
                        onClick={handleCreate}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        disabled={isMutating}
                    >
                        Upload Your First Image
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <WDPageImageCard
                            key={image._id}
                            
                            image={image}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            isMutating={isMutating}
                        />
                    ))}
                </div>
            )}

            <WDPageImageForm
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                image={currentImage}
                isSubmitting={isMutating}
            />
        </div>
    );
};

export default WDPageImagesGrid;