import { Request, Response } from 'express';
import WDPageImage from '../models/WDPageImage';
import { IWDPageImage } from '../models/WDPageImage';

export const createWDPageImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const { title, description } = req.body;
    const imagePath = `/uploads/${req.file.filename}`;

    const newImage: IWDPageImage = new WDPageImage({
      title,
      imagePath,
      description,
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getWDPageImages = async (req: Request, res: Response) => {
  try {
    const images = await WDPageImage.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getWDPageImageById = async (req: Request, res: Response) => {
  try {
    const image = await WDPageImage.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateWDPageImage = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const updateData: Partial<IWDPageImage> = { title, description };

    if (req.file) {
      updateData.imagePath = `/uploads/${req.file.filename}`;
    }

    const updatedImage = await WDPageImage.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteWDPageImage = async (req: Request, res: Response) => {
  try {
    const deletedImage = await WDPageImage.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};