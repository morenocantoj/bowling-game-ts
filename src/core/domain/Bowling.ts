import { PlayerScore } from './PlayerScore'
import { NormalFrame } from './NormalFrame'

export class Bowling {
  constructor(private playerScores: PlayerScore[]) {
    if (playerScores.length <= 0) {
      throw new Error('There must be at least one player')
    }
  }

  static createGame(numberOfPlayers: number): Bowling {
    return new Bowling(Array(numberOfPlayers).fill(new PlayerScore()))
  }

  calculatePlayerScore(playerPosition: number): number {
    const playerScore = this.getPlayerScore(playerPosition)

    return playerScore.getCurrentScore()
  }

  rollFrame(rawFrame: string, playerPosition: number): void {
    const playerScore = this.getPlayerScore(playerPosition)
    const rolls: number[] = rawFrame.split(' ').map((roll: string, i: number) => {
      if (roll === 'X') return 10
      if (roll === '-') return 0
      if (roll === '/') return 10 - Number(rolls[i - 1])

      return Number(roll)
    })
    const frameParsed = new NormalFrame(rolls[0], rolls[1])

    playerScore.addFrame(frameParsed)
  }

  private getPlayerScore(playerPosition: number) {
    const playerScore = this.playerScores[playerPosition]
    if (!playerScore) {
      throw Error('There is no player according position passed')
    }

    return playerScore
  }
}
