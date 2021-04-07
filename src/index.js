const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    bob: "marley",
  });
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("APP LISTENING AT 3333"));
