import express from "express";
import cors from "cors";
import toursRouter from "./routes/tours.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Trip Trek API running" }));
app.use("/api/tours", toursRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
