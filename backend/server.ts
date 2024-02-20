import express from 'express';
import morgan from "morgan";
import userRoutes from './src/routes/users'
import employeeRoutes from './src/routes/employees'
import { config } from "dotenv";
import cors from "cors";

const app = express();
config();

const port = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});

export default app;