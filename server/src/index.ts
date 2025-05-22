import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import addServicesRoutes from "./routes/addServicesRouts";
import { insertStaticServices } from "./models/addServices"; // <-- Add this import
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/addServices", addServicesRoutes);

// // Call static data insertion after DB connection
// insertStaticServices().then(() => {
//   console.log("Static services inserted (if not already present)");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
