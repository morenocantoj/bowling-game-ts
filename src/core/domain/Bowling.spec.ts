import { Bowling } from './Bowling'
import { NormalFrame } from './NormalFrame'
import { PlayerScore } from './PlayerScore'

describe('Bowling', () => {
  let bowling: Bowling

  describe('createGame', () => {
    it('creates bowling game some players', () => {
      const numberOfPlayers = 4

      bowling = Bowling.createGame(numberOfPlayers)
    })

    it('throws error if there are no players', () => {
      expect(() => Bowling.createGame(0)).toThrowError()
    })
  })

  describe('getPlayerScore', () => {
    it('gets the result from a player', () => {
      const playerScore = new PlayerScore()
      playerScore.addFrame(new NormalFrame(8, 1))
      const playerScores = Array(2).fill(playerScore)

      bowling = new Bowling(playerScores)

      expect(bowling.calculatePlayerScore(0)).toBe(playerScore.getCurrentScore())
      expect(bowling.calculatePlayerScore(1)).toBe(playerScore.getCurrentScore())
    })

    it('throws error when getting player score from unexistent player position', () => {
      const playerScores = Array(1).fill(new PlayerScore())

      bowling = new Bowling(playerScores)

      expect(() => bowling.calculatePlayerScore(4)).toThrowError()
    })

    it('throws error when getting player score from player position below zero', () => {
      const playerScores = Array(1).fill(new PlayerScore())

      bowling = new Bowling(playerScores)

      expect(() => bowling.calculatePlayerScore(-1)).toThrowError()
    })
  })

  describe('rollFrame', () => {
    it('adds a player roll correctly', () => {
      const playerScore = new PlayerScore()
      const playerScores = Array(2).fill(playerScore)

      bowling = new Bowling(playerScores)
      bowling.rollFrame('7 1', 0)

      expect(bowling.calculatePlayerScore(0)).toBe(8)
    })

    it('throws an error when adding a frame to a non existent player', () => {
      const playerScore = new PlayerScore()
      const playerScores = Array(2).fill(playerScore)

      bowling = new Bowling(playerScores)

      expect(() => bowling.rollFrame('7 1', 3)).toThrowError()
    })
  })
})
