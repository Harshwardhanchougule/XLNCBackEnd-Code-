import mongoose, { Document, Schema } from "mongoose";

interface IService extends Document {
  _id: string;
  name: string;
  description: string;
  iconUrl: string;
 
}

const ServiceSchema = new Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"],
      // trim: true,
      // maxlength: [100, "Name cannot exceed 100 characters"]
    },
    description: { 
      type: String, 
      required: [true, "Description is required"],
      // trim: true,
      // maxlength: [500, "Description cannot exceed 500 characters"]
    },
    iconUrl: { 
      type: String, 
      required: [true, "Icon URL is required"],
      // trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IService>("Service", ServiceSchema);