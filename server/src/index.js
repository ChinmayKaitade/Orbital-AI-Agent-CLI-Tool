import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/health", (req, res) => {
  res.send("Everything is OK! Server Application is Running...");
});

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
