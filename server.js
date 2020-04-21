const express = require("express");

const userRouter = require("./users/userRouter");

const server = express();

server.use(express.json());
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.json({ api: "is up and running" });
});

module.exports = server;
