const express = require("express");
const gamesLogic = require("../logic/games");
const router = express.Router();

// GET <http://localhost:3000/api/games>
router.get("/", async (request, response) => {
  try {
    const games = await gamesLogic.getAllGamesAsync();
    response.json(games);
  } catch (err) {
    response.status(500).send(err.message);
  }
});


/*-*/
// GET <http://localhost:3000/api/games/game/:id>
router.get("/game/:id", async (request, response) => {
  try {
    const id = +request.params.id
    const game = await gamesLogic.getOneGameAsync(id);
    response.json(game);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/games/category/:cat>
router.get("/category/:cat", async (request, response) => {
  try {
    const cat = request.params.cat
    const games = await gamesLogic.getAllGamesFromCatAsync(cat);
    response.json(games);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST <http://localhost:3000/api/games/>
router.post("/", async(request, response) => {
  const info = request.body;
  try {
      const game = await gamesLogic.AddOneGameAsync(info);
      response.json(game);
  } catch (err) {
      response.status(500).send(err.message);
  }
});

module.exports = router;
