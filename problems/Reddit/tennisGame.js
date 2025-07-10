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
    constructor() {
        this.players = { player1: 0, player2: 0 };
        this.games = [{ player1: 0, player2: 0 }];
        this.currentGame = { player1: 0, player2: 0 };
    }

    scorePoint(player) {
        if (!this.players.hasOwnProperty(player)) {
            throw new Error("Invalid player");
        }

        const opponent = player === 'player1' ? 'player2' : 'player1';
        this.currentGame[player]++;

        if (this.currentGame[player] >= 4 && this.currentGame[opponent] < 3) {
            this.games[player]++;
            this.resetCurrentGame();
        } else if (this.currentGame[player] === 3 && this.currentGame[opponent] === 3) {
            this.currentGame[player] = 3; // Deuce
            this.currentGame[opponent] = 3;
        } else if (this.currentGame[player] === 4 && this.currentGame[opponent] === 3) {
            // Advantage
            this.currentGame[player] = 5; // Player wins the game
        } else if (this.currentGame[opponent] === 4 && this.currentGame[player] === 3) {
            // Opponent has advantage, reset to deuce
            this.resetCurrentGame();
        }
    }

    getScore() {
        if (this.getWinner()) {
            throw new Error("Match is over");
        }
        
        const scoreMap = { 0: "0", 1: "15", 2: "30", 3: "40", 4: "Advantage" };
        const player1Score = scoreMap[this.currentGame.player1];
        const player2Score = scoreMap[this.currentGame.player2];

        return `${player1Score} - ${player2Score}`;
    }

    getWinner() {
        if (this.games.player1 >= 3) return 'player1';
        if (this.games.player2 >= 3) return 'player2';
        return null;
    }

    resetCurrentGame() {
        this.currentGame.player1 = 0;
        this.currentGame.player2 = 0;
    }
}

// Tests cases to validate all rules:
const match = new TennisMatch();


