import { Square } from "./Square"

interface WinnerModalProps {
    winner: boolean | null;
    resetGame: () => void

}
export const WinnerModal: React.FC<WinnerModalProps> = ({ winner, resetGame }) => {
    if (winner === null) return
    const winnerText = winner === false ? 'Empate' : 'Ganó:'
    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                {
                    winner !== false && winner !== null &&
                    <header className='win'>
                        <Square> {winner} </Square>
                    </header>
                }
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}