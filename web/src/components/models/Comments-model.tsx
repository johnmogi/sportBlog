export class CommentModel { 
    public constructor(
        public gameID?: number,
        public commentID?: number,
        public comment?: string,
        public commentTime?: string,
        public tags?: string
        ) {} }