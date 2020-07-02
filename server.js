const express = require("express");
const app = express();
const port = process.env.PORT || 5555;

app.get("", (req, res) => {
  res.json({
    message: "Deu bom truta",
  });
});

app.listen(port, (err) => { 
  if (err) return console.log(`Não startou ${err}`);
  console.log("Running on port", port);
});
