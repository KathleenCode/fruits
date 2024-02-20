import express from 'express';
import cors from "cors";
import morgan from 'morgan';
import dotenv from 'dotenv';
import reviewRoute from "./routes/reviewRoutes.js";

dotenv.config();
import connectDb from './db.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/reviews", reviewRoute);

app.listen(PORT, () => {
    connectDb()
    console.log(`Server running on port ${PORT}`);
})