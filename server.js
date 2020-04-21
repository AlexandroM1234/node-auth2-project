const express = require("express");

const userRouter = require("./userRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "is up and running" });
});

module.exports = server;
