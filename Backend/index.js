const express = require("express");
const con = require("./connection");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/report/", require("./routes/reportRoute"));

con.connect((error) => {
  if (error) throw error;

  console.log("connected to mysql");
});

app.listen(4000, () => {
  console.log("server run in port 4000");
});
