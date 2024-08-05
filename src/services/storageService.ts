
interface GameState {
    board: any[];
    turn: string
}

export const saveGameStorage = ({ board, turn }: GameState): void => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = (): void => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
