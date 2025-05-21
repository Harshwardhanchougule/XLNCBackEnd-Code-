import mongoose from "mongoose";

const addServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const AddServices = mongoose.model("AddServices", addServicesSchema);

export default AddServices;
