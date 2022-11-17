export abstract class Frame {
  protected static MAX_SCORE = 10

  constructor(protected firstScore: number, protected secondScore: number) {
    if ([firstScore, secondScore].some(score => score > Frame.MAX_SCORE)) {
      throw new Error(`No throw can exceed ${Frame.MAX_SCORE} limit`)
    }
  }

  abstract getFrameScore(): number
  abstract isStrike(): boolean
  abstract isSpare(): boolean

  getFirstScore(): number {
    return this.firstScore
  }

  getSecondScore(): number {
    return this.secondScore
  }
}
