const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./../client/index.html"));
});

app.post("/signup", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./../client/index.html"))
);

app.put("/api/shoppingCart", (req, res) => res.send("successful put request"));

app.post("/api/shoppingCart", (req, res) =>
  res.send("successful post request")
);

app.delete("/api/shoppingCart", (req, res) =>
  res.send("successful delete request")
);

app.get("/api/shoppingCart", (req, res) => res.send("successful get request"));

app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app;
