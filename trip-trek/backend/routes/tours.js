import express from "express";
const router = express.Router();

const tours = [
  { id: 1, name: "Goa Beach Escape", price: 8999, duration: "3 Days", location: "Goa" },
  { id: 2, name: "Himalayan Trek", price: 14999, duration: "5 Days", location: "Himachal" }
];

router.get("/", (req, res) => res.json(tours));

router.post("/book", (req, res) => {
  const { tourId, name, email } = req.body;
  return res.status(201).json({ message: "Booking successful", tourId, name });
});

export default router;
