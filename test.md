db structure:

sportsBlog - db name.

games table:

gameID
teamA
teamB
teamAScore
teamBScore
gameDate (dateTime)
category

fill db with 6 games (3 basketball, 3 soccer)
bonus : add 3 future games.

comment table:
commentID
comment (200)
gameID (fk)
commentTime (dateTime)
bonus tags? values- soccer, basket, team names etc.

server routes for client:
Football - all soccer games.
BasketBall - all basket games.
game page - display scores of chosen page _ comments.

client:
display game in Game/Score component - full game details.
while in home - pressing a game name will link to that game.

add comment in game page
textarea to add comment
when adding a comment retrieve all comment again

use material ui

good luck



INSERT INTO `games` (`gameID`, `teamA`, `teamB`, `teamAScore`, `teamBScore`, `gameDate`, `category`) VALUES (NULL, 'Hapoel Dardasim', 'Maccabi katkatim', '0', '0', '2020-08-15', 'dwarf-throwing');

INSERT INTO `comments` (`commentID`, `comment`, `gameID`, `commentTime`, `tags`) VALUES (NULL, 'best game of the century, tremendous', '1', '2020-08-01 12:48:30.000000', '1');

Maccabi Tel-Aviv
Maccabi Haifa
Maccabi TLV
Hapoel TLV
Hapoel Jerusalem
Maccabi Beer- sheba