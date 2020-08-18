const dal = require("../data/dal");
async function getAllcommentsAsync() {
  // const sql = `SELECT T.gameName,  U.reviewid, U.userName, U.review, U.reviewDate, U.gameID
  // FROM usercomment as U  JOIN titles as T`;

  // DATE_FORMAT(gameDate, "%m/%d/%Y %H:%i") as
  const sql = `SELECT commentID, comment, gameID, DATE_FORMAT(commentTime, "%m/%d/%Y %H:%i") as commentTime, tags FROM comments`
  const comments = await dal.executeAsync(sql);
  return comments;
}
async function getOnecommentAsync(id) {
  const sql = `SELECT commentID, comment, gameID, DATE_FORMAT(commentTime, "%m/%d/%Y %H:%i") as commentTime, tags FROM comments WHERE gameID = ${id}`;
  const comment = await dal.executeAsync(sql);
  return comment;
}

async function AddOneCommentAsync(info) {
  // INSERT INTO comments (comment, gameID, commentTime, tags) VALUES ( 'ww', 3, '2020-8-2 9:11:19', 'ee'  )
  const sql = `INSERT INTO comments ( comment ,gameID ,commentTime, tags) 
  VALUES (  '${info.comment}',  ${info.gameID} ,'${info.commentTime}', '${info.tags}')`;
  const comments = await dal.executeAsync(sql);
  return comments;
}


module.exports = { getAllcommentsAsync,getOnecommentAsync, 
  AddOneCommentAsync 
};
