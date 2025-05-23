// src/models/DataItem.ts
import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the document structure
interface IDataItem extends Document {
  name: string;
  url: string;
  
}

const DataItemSchema: Schema = new Schema({
  name: {
    type: String,
    
  },
  url: {
    type: String,
    
  },
  date: {
    type: Date,
   
  },
});

// Export the model with the interface
export default mongoose.model<IDataItem>("DataItem", DataItemSchema);
