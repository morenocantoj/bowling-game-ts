import { Frame } from './Frame'

export class LastFrame extends Frame {
  protected static MAX_FRAME_SCORE = 30

  constructor(firstScore: number, secondScore: number, private thirdScore?: number) {
    super(firstScore, secondScore)

    if (thirdScore) {
      if (firstScore < LastFrame.MAX_SCORE && thirdScore !== undefined) {
        throw new Error(`You can not roll a third score if your first is not a strike`)
      }
    }

    if (LastFrame.exceedsMaxScore(firstScore, secondScore, thirdScore)) {
      throw new Error(`Score of the three throws can not exceed ${LastFrame.MAX_SCORE}`)
    }
  }

  private static exceedsMaxScore(firstScore: number, secondScore: number, thirdScore = 0): boolean {
    return firstScore + secondScore + thirdScore > LastFrame.MAX_FRAME_SCORE
  }

  getFrameScore(): number {
    let score = this.firstScore + this.secondScore
    if (this.thirdScore) score += this.thirdScore

    return score
  }

  isStrike(): boolean {
    return false
  }

  isSpare(): boolean {
    return false
  }
}
