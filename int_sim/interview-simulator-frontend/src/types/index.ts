import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic route for questions
app.get("/api/questions", (req, res) => {
  // Mock data - replace with database queries later
  const questions = [
    {
      id: 1,
      text: "Tell me about yourself",
      category: "General",
    },
    {
      id: 2,
      text: "What are your greatest strengths?",
      category: "Personal",
    },
  ];

  res.json(questions);
});

// Route to handle audio submissions
app.post("/api/submit-answer", (req, res) => {
  // Handle audio file processing here
  res.json({ message: "Answer received" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
