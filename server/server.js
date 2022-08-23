import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productsRoute from "./Routes/ProductsRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js"
dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productsRoute);
app.use("/api/users", userRouter);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
