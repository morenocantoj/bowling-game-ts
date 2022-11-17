import { LastFrame } from './LastFrame'
import { NormalFrame } from './NormalFrame'
import { PlayerScore } from './PlayerScore'

describe('PlayerScore', () => {
  let playerScore: PlayerScore

  describe('getCurrentScore', () => {
    it('returns 0 when no frames scored yet', () => {
      playerScore = new PlayerScore()

      const result = playerScore.getCurrentScore()

      expect(result).toBe(0)
    })

    it('returns the sum of two frames without spares nor strikes', () => {
      playerScore = new PlayerScore()
      const firstFrame = new NormalFrame(1, 7)
      const secondFrame = new NormalFrame(6, 3)
      playerScore.addFrame(firstFrame)
      playerScore.addFrame(secondFrame)

      const result = playerScore.getCurrentScore()

      expect(result).toBe(firstFrame.getFrameScore() + secondFrame.getFrameScore())
    })

    it('returns the sum of two frames adding a strike multiplier', () => {
      playerScore = new PlayerScore()
      const firstFrame = new NormalFrame(10, 0)
      const secondFrame = new NormalFrame(8, 1)
      playerScore.addFrame(firstFrame)
      playerScore.addFrame(secondFrame)

      const result = playerScore.getCurrentScore()

      expect(result).toBe(28)
    })

    it('returns the sum of three strikes', () => {
      playerScore = new PlayerScore()
      const strikeFrame = new NormalFrame(10, 0)
      const badFrame = new NormalFrame(0, 0)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(badFrame)

      const result = playerScore.getCurrentScore()

      expect(result).toBe(60)
    })

    it('returns the sum of two frames adding a spare multiplier', () => {
      playerScore = new PlayerScore()
      const firstFrame = new NormalFrame(7, 3)
      const secondFrame = new NormalFrame(6, 0)
      playerScore.addFrame(firstFrame)
      playerScore.addFrame(secondFrame)

      const result = playerScore.getCurrentScore()

      expect(result).toBe(22)
    })

    it('returns the sum of 10 strikes, including the last frame', () => {
      playerScore = new PlayerScore()
      const strikeFrame = new NormalFrame(10, 0)
      const strikeLastFrame = new LastFrame(10, 10, 10)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addFrame(strikeFrame)
      playerScore.addLastFrame(strikeLastFrame)

      const result = playerScore.getCurrentScore()

      expect(result).toBe(300)
    })

    it('returns 69', () => {
      playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(0, 0))
      playerScore.addFrame(new NormalFrame(0, 8))
      playerScore.addFrame(new NormalFrame(8, 1))
      playerScore.addFrame(new NormalFrame(4, 0))
      playerScore.addFrame(new NormalFrame(5, 2))
      playerScore.addFrame(new NormalFrame(0, 7))
      playerScore.addFrame(new NormalFrame(7, 3))
      playerScore.addFrame(new NormalFrame(3, 0))
      playerScore.addFrame(new NormalFrame(10, 0))
      playerScore.addFrame(new LastFrame(3, 1))

      const result = playerScore.getCurrentScore()

      expect(result).toBe(69)
    })
  })

  describe('addFrame', () => {
    it('adds a frame', () => {
      playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(1, 8))
    })

    it('fails when a final frame is present in the score', () => {
      playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(1, 8))
      playerScore.addLastFrame(new LastFrame(7, 1))

      expect(() => playerScore.addFrame(new NormalFrame(1, 3))).toThrowError()
    })
  })

  describe('addLastFrame', () => {
    it('adds a last frame', () => {
      playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(1, 8))
      playerScore.addLastFrame(new LastFrame(1, 8))
    })

    it('fails when a final frame is present in the score', () => {
      playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(1, 8))
      playerScore.addLastFrame(new LastFrame(7, 1))

      expect(() => playerScore.addLastFrame(new LastFrame(7, 1))).toThrowError()
    })
  })
})
