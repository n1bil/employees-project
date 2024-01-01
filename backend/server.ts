import express from 'express';
import morgan from "morgan";
import userRoutes from './src/routes/users'
import { config } from "dotenv";

const app = express();
config();

const port = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});