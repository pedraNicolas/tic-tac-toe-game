import {WINNER_COMBOS} from '../core/constants'

export const checkWinner = (boardToCheck: any[]) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard: any[]) => {
    return newBoard.every((square) => square !== null)
  }