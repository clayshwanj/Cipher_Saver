import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
//Home page
app.get("/", (req, res) => {
  res.render("index");
});

//Our Services
app.get("/services", (req, res) => {
  res.render("services");
});
//About us
app.get("/about", (req, res) => {
  res.render("about");
});

//Contact us
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Starting the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
