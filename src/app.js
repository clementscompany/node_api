import express from "express";
import UserController from "./controllers/UserController.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));



app.get("/", UserController.listAll);
app.get("/data/:id", UserController.listBy);
app.post('/post', UserController.cadastrate);
app.delete("/delete", UserController.deleteBy);
app.put('/update/:id', UserController.updateData);

export default app;

