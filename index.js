const express = require("express");
const cors = require("cors");
const PORT = 8000;
const helmet = require("helmet");
const logger = require("morgan");

//Express Server
const server = express();
const actionRouter = require("./data/routers/actionRouter");
const projectRouter = require("./data/routers/projectRouter");

// Middle Ware
server.use(express.json(), logger("tiny"), helmet(), cors());
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.listen(PORT, () => {
  console.log(`server is up and running on port: ${PORT}`);
});
