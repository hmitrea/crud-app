const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client')));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../client/index.html")));

app.post("/signup", (req, res) => res.send("sign up successful"));

app.put("/api/shoppingCart", (req, res) => res.json({message: "successful put request"}));

app.post("/api/shoppingCart", (req, res) =>
  res.send("successful post request")
);

app.delete("/api/shoppingCart", (req, res) =>
  res.send("successful delete request")
);
app.get("/api/shoppingCart", (req, res) => res.send("successful get request"));
app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app;
