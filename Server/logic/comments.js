const dal = require("../data/dal");
async function getAllcommentsAsync() {
  // const sql = `SELECT T.gameName,  U.reviewid, U.userName, U.review, U.reviewDate, U.gameID
  // FROM usercomment as U  JOIN titles as T`;
  const sql = 'SELECT * FROM comments'
  const comments = await dal.executeAsync(sql);
  return comments;
}
async function getOnecommentAsync(id) {
  const sql = `SELECT * FROM comments WHERE gameID = ${id}`;
  const comment = await dal.executeAsync(sql);
  return comment;
}

async function AddOneCommentAsync(info) {
  const sql = `INSERT INTO comments ( comment, gameID, commentTime, tags) 
  VALUES ( '${info.comment}', 
  '${info.commentTime}','${info.tags}', ${info.gameID})`;
  console.log(sql)
  const comments = await dal.executeAsync(sql);
  return comments;
}


module.exports = { getAllcommentsAsync,getOnecommentAsync, 
  AddOneCommentAsync 
};
