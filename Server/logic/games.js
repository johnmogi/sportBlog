const dal = require("../data/dal");

async function getAllGamesAsync() {
  const sql = "SELECT * FROM games";
  const games = await dal.executeAsync(sql);
  return games;
}

/* --*/
async function getOneGamesAsync(id) {
  const sql = `SELECT * FROM games WHERE gamesID = ${id}`;
  const games = await dal.executeAsync(sql);
  return games;
}
async function getAllGamesFromCatAsync(cat) {
  const sql = `SELECT * FROM games WHERE category = '${cat}'`;
  const games = await dal.executeAsync(sql);
  return games;
}



module.exports = { getAllGamesAsync,getOneGamesAsync, 
  getAllGamesFromCatAsync};
