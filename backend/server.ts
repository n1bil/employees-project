import express from 'express';
import morgan from "morgan";
import userRoutes from './src/routes/users'

const app = express();
const port = 8000;  
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});