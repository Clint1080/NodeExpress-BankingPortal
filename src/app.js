const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

const port = process.env.PORT || "3000";
app.listen(port, () => {
  console.log(`PS Project Running on port ${port}!`);
});
