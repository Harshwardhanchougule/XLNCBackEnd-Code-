import { Request, Response } from 'express';
import Industry from '../models/Industry';
import { IIndustry, IndustryInput } from '../types/industry.types';

export const createIndustry = async (
  req: Request<{}, {}, IndustryInput>,
  res: Response
): Promise<void> => {
  try {
    const { name, imageUrl, description } = req.body;
    const industry: IIndustry = new Industry({ name, imageUrl, description });
    await industry.save();
    res.status(201).json(industry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getIndustries = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const industries: IIndustry[] = await Industry.find().sort({ createdAt: -1 });
    res.status(200).json(industries);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getIndustryById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const industry: IIndustry | null = await Industry.findById(req.params.id);
    if (!industry) {
      res.status(404).json({ message: 'Industry not found' });
      return;
    }
    res.status(200).json(industry);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateIndustry = async (
  req: Request<{ id: string }, {}, IndustryInput>,
  res: Response
): Promise<void> => {
  try {
    const { name, imageUrl, description } = req.body;
    const updatedIndustry: IIndustry | null = await Industry.findByIdAndUpdate(
      req.params.id,
      { name, imageUrl, description },
      { new: true, runValidators: true }
    );
    if (!updatedIndustry) {
      res.status(404).json({ message: 'Industry not found' });
      return;
    }
    res.status(200).json(updatedIndustry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteIndustry = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const deletedIndustry: IIndustry | null = await Industry.findByIdAndDelete(
      req.params.id
    );
    if (!deletedIndustry) {
      res.status(404).json({ message: 'Industry not found' });
      return;
    }
    res.status(200).json({ message: 'Industry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};