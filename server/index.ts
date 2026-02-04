import "dotenv/config";
import express from "express";
import cors from "cors";

import { handleDemo } from "./routes/demo";
import { handleContact } from "./routes/contact";

export function createServer() {
  const app = express();

  // ---------- MIDDLEWARE ----------
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ---------- TEST ROUTE ----------
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  // ---------- ROUTES ----------
  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContact);

  return app;
}
