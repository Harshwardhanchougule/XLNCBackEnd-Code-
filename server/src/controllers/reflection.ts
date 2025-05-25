import { Request, Response } from 'express';
import Reflection from '../models/reflection';

export const getReflections = async (req: Request, res: Response) => {
  try {
    const reflections = await Reflection.find().sort({ createdAt: -1 });
    res.json(reflections);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createReflection = async (req: Request, res: Response) => {
  const { content, aiModel } = req.body;

  try {
    const newReflection = new Reflection({
      content,
      aiModel
    });

    const savedReflection = await newReflection.save();
    res.status(201).json(savedReflection);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};