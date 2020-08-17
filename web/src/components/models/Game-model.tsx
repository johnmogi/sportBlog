export class GameModel { 
    public constructor(
        public gameID?: number,
        public teamA?: string,
        public teamB?: string,
        public teamAScore?: number,
        public teamBScore?: number,
        public gameDate?: string,
        public category?: string,
        ) {} }
