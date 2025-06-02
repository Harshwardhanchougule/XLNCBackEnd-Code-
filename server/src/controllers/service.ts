import { Request, Response } from "express";
import Service from "../models/Service";

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, description, iconUrl } = req.body;

     

    const newService = await Service.create({
      name,
      description,
      iconUrl,
    });

    res.status(201).json(newService);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
       errors: error.errors,
    });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    console.log("getServices route called"); // Add this line
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

 const deleteService = async (req: Request, res: Response) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export { deleteService };
