import { Request, Response } from "express";
import DataItem from "../models/DataItem";

// Create a new DataItem
export const createDataItem = async (req: Request, res: Response) => {
  try {
    const { name, url } = req.body;

    const newItem = new DataItem({
      name,
      url,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      errors: error.errors,
    });
  }
};

// Get all DataItems
export const getDataItems = async (req: Request, res: Response) => {
  try {
    const items = await DataItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get single DataItem
export const getDataItem = async (req: Request, res: Response) => {
  try {
    const item = await DataItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "DataItem not found" });
    }
    res.json(item);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update DataItem
export const updateDataItem = async (req: Request, res: Response) => {
  try {
    const { name, url } = req.body;
    const updatedItem = await DataItem.findByIdAndUpdate(
      req.params.id,
      { name, url },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "DataItem not found" });
    }

    res.json(updatedItem);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      errors: error.errors,
    });
  }
};

// Delete DataItem
export const deleteDataItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await DataItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "DataItem not found" });
    }
    res.json({ message: "DataItem deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};