import { isStrike } from './frame'

describe('frame', () => {
  describe('isStrike', () => {
    it('returns true if first throw is 10', () => {
      const frame = [10, 0]

      const result = isStrike(frame)

      expect(result).toBe(true)
    })

    it('returns false if first throw is not 10', () => {
      const frame = [0, 10]

      const result = isStrike(frame)

      expect(result).toBe(false)
    })
  })
})
