import React from "react";
import { GameModel } from "./models/Game-model";

interface GameBoxState {
    games: GameModel[];
    game: GameModel;
}
class GameCard extends React.Component<any, GameBoxState> {
    public constructor(props: any) {
        super(props);
        this.state = { games: [] , game: new GameModel()};
      }
  render() {
    return <>
    <h3>proped title</h3>
    
    </>
  }
}
export default GameCard;