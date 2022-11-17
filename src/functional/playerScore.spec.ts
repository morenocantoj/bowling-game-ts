import { playerScore } from './playerScore'

describe('playerScore', () => {
  it('returns 0 when no frames scored yet', () => {
    const frames: number[][] = []

    const result = playerScore(frames)

    expect(result).toBe(0)
  })

  it('returns the sum of two frames without spares nor strikes', () => {
    const frame1 = [1, 7]
    const frame2 = [6, 3]
    const frames: number[][] = [frame1, frame2]

    const result = playerScore(frames)

    expect(result).toBe(frame1[0] + frame1[1] + frame2[0] + frame2[1])
  })
})
