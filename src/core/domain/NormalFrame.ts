import { Frame } from './Frame'

export class NormalFrame extends Frame {
  private static MAX_FRAME_SCORE = 10

  constructor(firstScore: number, secondScore: number) {
    super(firstScore, secondScore)

    if (NormalFrame.exceedsMaxScore(firstScore, secondScore)) {
      throw new Error(`Score of both throws can not exceed ${NormalFrame.MAX_FRAME_SCORE}`)
    }
  }

  private static exceedsMaxScore(firstScore: number, secondScore: number): boolean {
    return firstScore + secondScore > NormalFrame.MAX_FRAME_SCORE
  }

  getFrameScore(): number {
    return this.firstScore + this.secondScore
  }

  isStrike(): boolean {
    return this.firstScore === NormalFrame.MAX_FRAME_SCORE
  }

  isSpare(): boolean {
    return !this.isStrike() && this.getFrameScore() === NormalFrame.MAX_FRAME_SCORE
  }
}
