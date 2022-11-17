import { LastFrame } from './LastFrame'

describe('LastFrame', () => {
  let lastFrame: LastFrame

  describe('constructor', () => {
    it('throws error if first score does not match a strike and there is a third score', () => {
      expect(() => new LastFrame(7, 4, 1)).toThrowError()
    })

    it('throws error if three scores are greater than max score', () => {
      expect(() => new LastFrame(10, 10, 11)).toThrowError()
    })
  })
})
