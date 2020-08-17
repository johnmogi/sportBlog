import React, { ChangeEvent, SyntheticEvent } from "react";
import { GameModel } from "../models/Game-model";
import { CommentModel } from "../models/Comments-model";

interface GameBoxState {
  games: GameModel[];
  comments: CommentModel[];
  game: GameModel;
  gamesLoad : Boolean;
}

class GamesPage extends React.Component<any, GameBoxState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      games: [],
      comments: [],
      game: new GameModel(),
      gamesLoad : false
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

  render() {
    return (
        <>
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
{ this.state.comments ? 
        <div className="row">
        {this.state.comments.map((c) => (
          <div className="card col-4" key={c.commentID}>
        
        {c.comment}
          </div>
        ))}
</div>
 : "no comments" }
        {/* <GamesPage gameID={this.state.game.gameID}  /> */}
      </>
    );
  }
}
export default GamesPage;
