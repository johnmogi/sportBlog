const express = require("express");
const cors = require("cors");
const gamesController = require("./controllers/game-ctrl");
const commentController = require("./controllers/comment-ctrl");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/games", gamesController);
server.use("/api/comments", commentController);



server.listen(3006, () => console.log("Listening on <http://localhost:3006>"));
