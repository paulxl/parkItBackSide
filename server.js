const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3000;

const connections = require("./testDataFiles/connections");
//const connArr = [];

//const fedParks = require("./fedParks");

server.use(bodyParser.json());
server.use(cors());

server.listen(PORT, () =>
  console.log(`Server running on flamingo juice and port ${PORT}   🔥`)
);
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//console.log("here i am " + connections.connectionCollections.length);
//console.log(connections.connectionCollections);

// TODO GET, POST, PUT, DELETE routes

server.get("/connections", (req, res) => {
  res.send(connections.connectionCollections);
});

server.get("/connections/id/:id", (req, res) => {
  const id = req.params.id;
  let result = [];
  console.log(id);

  for (let i = 0; i < connections.connectionCollections.length; i++) {
    if (connections.connectionCollections[i].id == id) {
      result.push(connections.connectionCollections[i]);
    }
  }
  res.send(result);
});

server.get("/connections/type/:type", (req, res) => {
  const type = req.params.type;
  let tempArr = [];

  for (let i = 0; i < connections.connectionCollections.length; i++) {
    if (connections.connectionCollections[i].type == type) {
      tempArr.push(connections.connectionCollections[i]);
    }
  }
  res.send(tempArr);
});

server.post("/connections", (req, res) => {
  connections.connectionCollections.push(req.body);
  res.send(connections.connectionCollections);
});

server.put("/connections/:id", (req, res) => {
  const id = req.params.id;
  const connection = req.body;
  //let result = connections.connectionCollections.filter((col) => col.cId == id);
  let result = [];
  for (let i = 0; i < connections.connectionCollections.length; i++) {
    if (connections.connectionCollections[i].id == id) {
      result = connections.connectionCollections[i];
    }
  }
  console.log("the results  " + result);

  if (connection.type !== undefined) {
    console.log("inside 11");

    result.type = connection.type;
    console.log(result.type);
  }
  if (connection.organizer !== undefined) {
    result.organizer = connection.organizer;
    console.log(result.organizer);
  }
  if (connection.date1 !== undefined) {
    result.date1 = connection.date1;
  }
  if (connection.time1 !== undefined) {
    result.time1 = connection.time1;
  }
  if (connection.trail !== undefined) {
    result.trail = connection.trail;
  }
  if (connection.meetLocation !== undefined) {
    result.meetLocation = connection.meetLocation;
  }

  res.send(result);
});

server.delete("/connections/:id", (req, res) => {
  const id = req.params.id;

  let colId = -1;
  connections.connectionCollections.map((col, idx) => {
    if (col.id === id) {
      // if true, found col to delete
      colId = idx;
      return;
    }
  });
  if (colId === -1) {
    return res.status(404).send("Collection not found");
  }
  connections.connectionCollections.splice(colId, 1);
  res.send({ success: "Success" });
});
