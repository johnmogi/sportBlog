import React, { ChangeEvent, SyntheticEvent } from "react";
import { GameModel } from "../models/Game-model";
import { CommentModel } from "../models/Comments-model";

interface GameBoxState {
  games: GameModel[];
  comments: CommentModel[];
  comment:CommentModel; 
  game: GameModel;
  gamesLoad : Boolean;
  commentLoad : Boolean;

}

class GamesPage extends React.Component<any, GameBoxState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      games: [],
      comments: [],
      comment: new CommentModel(),
      game: new GameModel(),
      gamesLoad : false,
      commentLoad  : false
    };
  }
  public componentDidMount(): void {
    fetch("http://localhost:3006/api/games")
      .then((response) => response.json())
      .then((games) => this.setState({ games }))
      .catch((err) => alert(err.message));
  }
public componentDidUpdate(): void{
    if(this.state.gamesLoad){
        this.viewComments();
this.setState({ gamesLoad : false });
    }

}
  public viewComments = () => {
      const gameID = this.state.game.gameID
    fetch(`http://localhost:3006/api/comments/comment/${gameID}`)
      .then((response) => response.json())
      .then((comments) => this.setState({ comments }))
      .catch((err) => alert(err.message));
  };

  private setGameID = (args: SyntheticEvent) => {
    const gameID = (args.target as HTMLInputElement).value;
    const game = this.state.game;
    game.gameID = +gameID;
    this.setState({ game });
    this.setState({ gamesLoad : true });
  };


  private setComment = (args: SyntheticEvent) => {
    const commentComment = (args.target as HTMLInputElement).value;
    const comment = this.state.comment;
    comment.comment = commentComment;
    this.setState({ comment });
    this.setState({ commentLoad : true });
  };
  public addComment = () => {
    console.log(this.state.comment)
  //   const gameID = this.state.game.gameID
  // fetch(`http://localhost:3006/api/comments/comment/${gameID}`)
  //   .then((response) => response.json())
  //   .then((comments) => this.setState({ comments }))
  //   .catch((err) => alert(err.message));
};
  

  render() {
    return (
        <>
        <h2>Check out our curated list of games: </h2>
        <p>Click on a game to check for user comments...</p>
      <div className="row">
        {this.state.games.map((g) => (
          <div className="card col-4" key={g.gameID}>
            <button onClick={this.setGameID} value={g.gameID}>
              {g.teamA} VS. {g.teamB}
            </button>
          </div>
        ))}
        </div>
        <hr />

        <div className="row">
        {this.state.comments.map((c) => (
          <div className="card col-4" key={c.commentID}>
        
        {c.comment}
          </div>
        ))}
</div>

<hr/>
<h3> Add Your comment...</h3>
<form>
  <label>Choose a game :</label>
<select onChange={this.setGameID}>
<option disabled placeholder="Choose a game">Please select:</option>
        {this.state.games.map(g =>
        <option key={g.gameID} value={g.gameID}>
           {g.teamA} VS. {g.teamB}
        </option>
    )}
    </select>
    <br /><br />

   <textarea onChange={this.setComment} value={this.state.comment.comment} ></textarea>
  <br /><br />
  <button type="button" className="btn btn-info" onClick={this.addComment}>Add Comment</button> 
  </form>

      </>
    );
  }
}
export default GamesPage;
