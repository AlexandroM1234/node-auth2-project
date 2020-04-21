const express = require("express");

const userRouter = require("./users/userRouter");
const authRouter = require("./auth/authRouter");

const auth = require("./auth/athenticator");
const server = express();

server.use(express.json());

server.use("/api/users", auth, userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "is up and running" });
});

module.exports = server;
