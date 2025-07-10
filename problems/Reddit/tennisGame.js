/**
 * Write a code to keep track of a tennis match.
 * A match consists of a series of games, and each game consists of a series of points.
 * The scoring system in a tennis game is as follows:
 *   - Points are scored as follows: 0, 15, 30, 40
 *   - If both players reach 40, the score is "Deuce".
 *   - If one player has 40 and the other has less than 40, the player with 40 is "Advantage".
 *   - If the player with Advantage wins the next point, they win the game.
 *   - If the player with Advantage loses the next point, the score returns to "Deuce" and both scores reset to 40.
 * 
 * Implement a class `TennisMatch` that keeps track of the scores of two players.
 * The class should have methods to:
 *   - scorePoint(player): Increment the score for the specified player.
 *   - getScore(): Return the current score if the game is still ongoing, otherwise throw an error.
 *   - getWinner(): Return the winner of the match if there is one, otherwise throw an error.
 * 
 * A tennins match consists of 5 games, and a player must win 3 games to win the match.
 */

class TennisMatch {
    // TODO
}

module.exports = TennisMatch

