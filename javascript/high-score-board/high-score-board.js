/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  let scoreBoard = { 'The Best Ever': 1000000 };
  return scoreBoard
  throw new Error('Please implement the createScoreBoard function');
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score

  return scoreBoard
  throw new Error('Please implement the addPlayer function');
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];

  return scoreBoard
  throw new Error('Please implement the removePlayer function');
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  for(let entry in scoreBoard){
    if(entry == player){
      scoreBoard[player] += points;
    }
  }
  return scoreBoard

  throw new Error('Please implement the addToScore function');
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for(let entry in scoreBoard){
    updateScore(scoreBoard, entry, 100);
  }

  return scoreBoard
  throw new Error('Please implement the applyMondayBonus function');
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {

  return params.normalizeFunction(params['score']);

  throw new Error('Please implement the normalizeScore function');
}
