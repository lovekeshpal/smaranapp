import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notes.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/notes", notesRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});