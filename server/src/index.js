import express from "express";
import dotenv from "dotenv";

import { toNodeHandler, fromNodeHeaders } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.js";

dotenv.config();

const app = express();

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    // Included 'OPTIONS' for preflight requests
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

const port = process.env.PORT;

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    // 'fromNodeHeaders' is now defined
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

app.get("/health", (req, res) => {
  res.send("Everything is OK! Server Application is Running...");
});

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
