import mongoose, { Document, Schema, Model } from "mongoose";

// Interface for TypeScript type checking
export interface IDataItem extends Document {
  name: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const DataItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      trim: true,
      validate: {
        validator: (value: string) => {
          // Simple URL validation
          return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
        },
        message: (props: any) => `${props.value} is not a valid URL`,
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Create and export the model
const DataItem: Model<IDataItem> = mongoose.model<IDataItem>(
  "DataItem",
  DataItemSchema
);

export default DataItem;