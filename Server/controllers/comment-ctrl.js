const express = require("express");
const commentsLogic = require("../logic/comments");
const router = express.Router();

// GET <http://localhost:3000/api/comments>
router.get("/", async (request, response) => {
  try {
    const comments = await commentsLogic.getAllcommentsAsync();
    response.json(comments);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/comments/comment/:id>
router.get("/comment/:id", async (request, response) => {
  const id = +request.params.id
  try {
    
    const comment = await commentsLogic.getOnecommentAsync(id);
    response.json(comment);
  } catch (err) {
    response.status(500).send(err.message);
  }
});


// POST <http://localhost:3000/api/comments/>
router.post("/", async(request, response) => {
  const info = request.body;
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth() +1
  const day = date.getDay()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const dateNow = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  info.commentTime = dateNow
// console.log(info)
  try {
      const comment = await commentsLogic.AddOneCommentAsync(info);
      response.json(comment);
  } catch (err) {
      response.status(500).send(err.message);
  }
});

module.exports = router;
