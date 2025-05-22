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

// Static data insertion function
export const insertStaticServices = async () => {
  const staticServices = [
    { name: "Service One", url: "https://serviceone.com" },
    { name: "Service Two", url: "https://servicetwo.com" },
    // Add more static services as needed
  ];

  // Insert only if not already present
  for (const service of staticServices) {
    const exists = await AddServices.findOne({ name: service.name });
    if (!exists) {
      await AddServices.create(service);
    }
  }
};

export default AddServices;
