import express from "express";
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // Use the CORS middleware

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
