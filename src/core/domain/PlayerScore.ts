import { NormalFrame } from './NormalFrame'
import { Frame } from './Frame'
import { LastFrame } from './LastFrame'

export class PlayerScore {
  private frames: Frame[]
  private lastFrame?: LastFrame

  constructor() {
    this.frames = []
  }

  getCurrentScore(): number {
    const frames = this.lastFrame ? [...this.frames, this.lastFrame] : this.frames

    return frames.reduce((totalScore: number, currentScore: Frame, i) => {
      if (currentScore.isStrike()) {
        return totalScore + this.calculateStrikePoints(currentScore, frames.slice(i + 1))
      }

      if (currentScore.isSpare()) {
        return totalScore + this.calculateSparePoints(currentScore, frames[i + 1])
      }

      return totalScore + currentScore.getFrameScore()
    }, 0)
  }

  addFrame(frame: NormalFrame): void {
    this.checkLastFrameAdded()

    this.frames.push(frame)
  }

  addLastFrame(frame: LastFrame): void {
    this.checkLastFrameAdded()

    this.lastFrame = frame
  }

  private calculateStrikePoints(currentScore: Frame, nextScores: Frame[]): number {
    let score = currentScore.getFrameScore()
    if (nextScores[0] === undefined) return 0

    score += nextScores[0].getFirstScore()
    if (nextScores[0].isStrike()) {
      if (nextScores[1] === undefined) return 0

      score += nextScores[1].getFirstScore()
    } else {
      score += nextScores[0].getSecondScore()
    }

    return score
  }

  private calculateSparePoints(currentScore: Frame, nextScore?: Frame): number {
    if (!nextScore) return 0
    return currentScore.getFrameScore() + nextScore.getFirstScore()
  }

  private checkLastFrameAdded() {
    if (this.lastFrame) {
      throw new Error('Can not add more frames in a finished score')
    }
  }
}
