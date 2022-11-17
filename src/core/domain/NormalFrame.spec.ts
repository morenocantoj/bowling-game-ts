import { NormalFrame } from './NormalFrame'

describe('Frame', () => {
  let frame: NormalFrame

  describe('constructor', () => {
    it('creates a new Frame', () => {
      expect(() => new NormalFrame(5, 5)).not.toThrowError()
    })

    it('fails if the first score exceeds max score', () => {
      expect(() => new NormalFrame(11, 0)).toThrowError()
    })

    it('fails if the second score exceeds max score', () => {
      expect(() => new NormalFrame(0, 11)).toThrowError()
    })

    it('fails if the sum of both scores exceeds max score', () => {
      expect(() => new NormalFrame(1, 10)).toThrowError()
    })
  })

  describe('isStrike', () => {
    it('returns true if first score scores max score', () => {
      frame = new NormalFrame(10, 0)

      const result = frame.isStrike()

      expect(result).toBe(true)
    })

    it('returns true if first score is below max score', () => {
      frame = new NormalFrame(9, 1)

      const result = frame.isStrike()

      expect(result).toBe(false)
    })
  })

  describe('isSpare', () => {
    it('returns true if both scores sum max score', () => {
      frame = new NormalFrame(9, 1)

      const result = frame.isSpare()

      expect(result).toBe(true)
    })

    it('returns false if both scores do not sum max score', () => {
      frame = new NormalFrame(8, 1)

      const result = frame.isSpare()

      expect(result).toBe(false)
    })
  })

  describe('getFrameScore', () => {
    it('returns both scores combined', () => {
      const firstScore = 8
      const secondScore = 1
      frame = new NormalFrame(firstScore, secondScore)

      const result = frame.getFrameScore()

      expect(result).toBe(firstScore + secondScore)
    })
  })

  describe('getFirstScore', () => {
    it('returns first score combined', () => {
      const firstScore = 8
      const secondScore = 1
      frame = new NormalFrame(firstScore, secondScore)

      const result = frame.getFirstScore()

      expect(result).toBe(firstScore)
    })
  })

  describe('getSecondScore', () => {
    it('returns first score combined', () => {
      const firstScore = 8
      const secondScore = 1
      frame = new NormalFrame(firstScore, secondScore)

      const result = frame.getSecondScore()

      expect(result).toBe(secondScore)
    })
  })
})
