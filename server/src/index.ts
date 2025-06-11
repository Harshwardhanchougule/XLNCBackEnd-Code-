import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import addServicesRoutes from "./routes/addServicesRouts";
import { insertStaticServices } from "./models/addServices"; // <-- Add this import
import itemsRouter from "./routes/items"; // Adjust the import path as necessary
import reflectionRoutes from "./routes/reflection"; // Adjust the import path as necessary
import serviceRouter from "./routes/services";
import imageRoutes from './routes/imageRoutes';
import industriesRouter from './routes/industries.routes';
import wdPageImagesRouter from './routes/wdPageImages.routes';
import path from 'path';



dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors(
  {
  origin: 'http://localhost:5173', // Your Vite frontend URL
  credentials: true
}
));
app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5000", // Allow requests from your frontend's origin (e.g., React dev server)
//     methods: ["GET", "POST"], // Allow only specified HTTP methods
//     credentials: true, // Allow cookies to be sent with requests (if needed)
//   })
// );

app.use("/api/users", userRoutes);
app.use("/api/addServices", addServicesRoutes);

// Define a simple root route
app.get("/api/items", (req: any, res: any) => {
  res.send("API Running");
});
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use("/api/data-items", itemsRouter);
app.use('/api/reflections', reflectionRoutes);
app.use("/api/services", serviceRouter);
app.use('/api/images', imageRoutes);
app.use('/api/industries', industriesRouter);
app.use('/api/wdpageimages', wdPageImagesRouter);



// // Call static data insertion after DB connection
// insertStaticServices().then(() => {
//   console.log("Static services inserted (if not already present)");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
