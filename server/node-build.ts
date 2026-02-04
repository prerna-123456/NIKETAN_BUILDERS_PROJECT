import path from "path";
import express from "express";
import { createServer } from "./index";

const app = createServer();
const port = Number(process.env.PORT) || 5000;

const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

// Serve static files
app.use(express.static(distPath));

// ✅ FIXED WILDCARD ROUTE (Express v5 compatible)
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }

  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api/ping`);
});
