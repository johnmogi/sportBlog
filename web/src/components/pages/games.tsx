import React, {  SyntheticEvent } from "react";
import { GameModel } from "../models/Game-model";
import { CommentModel } from "../models/Comments-model";

interface GameBoxState {
  games: GameModel[];
  comments: CommentModel[];
  comment:CommentModel; 
  game: GameModel;
  gamesLoad : Boolean;
}

class GamesPage extends React.Component<any, GameBoxState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      games: [],
      comments: [],
      comment: new CommentModel(),
      game: new GameModel(),
      gamesLoad : false
    };
  }
  public componentDidMount(): void {
    fetch("http://localhost:3006/api/games")
      .then((response) => response.json())
      .then((games) => this.setState({ games }))
      .catch((err) => alert(err.message));
      this.setState({ gamesLoad : false });
      this.viewComments();
  }
public componentDidUpdate(): void{
    if(this.state.gamesLoad){
        this.viewComments();
this.setState({ gamesLoad : false });
    }
}
public viewComments = () => {
  fetch(`http://localhost:3006/api/comments`)
    .then((response) => response.json())
    .then((comments) => this.setState({ comments }))
    .catch((err) => alert(err.message));
};


  public viewOneComment =(args: SyntheticEvent) => {
    let gameID = +(args.target as HTMLInputElement).value;
      
      if(!args){( gameID = 1)}
      console.log(gameID)
    fetch(`http://localhost:3006/api/comments/comment/${gameID}`)
      .then((response) => response.json())
      .then((comments) => this.setState({ comments }))
      .catch((err) => alert(err.message));
  };

  private setGameID = (args: SyntheticEvent) => {
    const gameID = (args.target as HTMLInputElement).value;
    const comment = this.state.comment;
    comment.gameID = +gameID;
    this.setState({ comment });
    // this.setState({ gamesLoad : true });
  };

  private setComment = (args: SyntheticEvent) => {
    const commentComment = (args.target as HTMLInputElement).value;
    const comment = this.state.comment;
    comment.comment = commentComment;
    this.setState({ comment });
  };
  private setTags = (args: SyntheticEvent) => {
    const tags = (args.target as HTMLInputElement).value;
    const comment = this.state.comment;
    comment.tags = tags;
    this.setState({ comment });
  };
  
  public addComment = () => {

    // const gameID = this.state.comment.gameID
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.state.comment),
      };
//   fetch(`http://localhost:3006/api/comments/comment/${gameID}`, options)
  fetch(`http://localhost:3006/api/comments/`, options)
    .then((response) => response.json())
    .then((comments) => this.setState({ comments }))
    .catch((err) => alert(err.message));
};

  render() {
    return (
        <>
      <div className="row">
        {this.state.games.map((g) => (
          <div className="card col-4" key={g.gameID}>
            <button className="btn btn-outline-dark" onClick={this.viewOneComment} value={g.gameID}>
              {g.teamA} VS. {g.teamB}
            </button>
            <h5 className="card-title text-center">{g.teamAScore}<span>|</span>{g.teamBScore}</h5>
          </div>
        ))}
        </div>
  
<br/>   
        <div className="row">
        {this.state.comments.length>0 ?
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Comment</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {this.state.comments.map(o =>
                <tr key={o.commentID}>
                  <td>{o.commentTime}</td>
                  <td>{o.comment}</td>
                  <td>{o.tags}</td>
                </tr>
              )}
            </tbody>
          </table>
          : null}

</div>

<hr/>
<h3> Add Your comment...</h3>
<form>
  <label>Choose a game :</label>
  <br/>
<label placeholder="Choose a game">Please select:</label>
<select onChange={this.setGameID}>
        {this.state.games.map(g =>
        <option key={g.gameID} value={g.gameID }>
           {g.teamA} VS. {g.teamB}
        </option>
    )}
    </select>
    <br /><br />

   <textarea onChange={this.setComment} value={this.state.comment.comment || ""} ></textarea>
  <br /><br />
  <input type="text" placeholder="add tags" onChange={this.setTags} value={this.state.comment.tags || ""} />
  <button type="button" className="btn btn-info" onClick={this.addComment}>Add Comment</button> 
  </form>


      </>
    );
  }
}
export default GamesPage;
