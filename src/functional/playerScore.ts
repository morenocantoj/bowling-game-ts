export const playerScore = (frames: number[][]): number =>
  frames.reduce((currentScore: number, frame: number[]) => currentScore + sumFrame(frame), 0)

const sumFrame = (frame: number[]): number => frame[0] + frame[1]
