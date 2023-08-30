const express = require("express");
const app = express();

const cors = require("cors");

const port = 5000;
app.use(cors());
app.use(express.json());


app.post("/api/movies", (req, res) => {
  console.log("req.body", req.body);
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
