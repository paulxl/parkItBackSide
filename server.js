const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const PORT = process.env || 3000;

const fedParks = require("./fedParks");

server.use(bodyParser.json());
server.use(cors());

server.listen(PORT, () =>
  console.log(
    `Server running on flamingo juice and port ${process.env.NODE_ENV}  mode on port ${PORT} 🔥`
  )
);
server.get("/", (req, res) => {
  res.sendFile(__dirname + "directory name");
});

// TODO GET, POST, PUT, DELETE routes
