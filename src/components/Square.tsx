
interface SquareProps {
    children: React.ReactNode;
    isSelected?: boolean;
    updateBoard?: (index: number) => void;
    index?: number;
}

export const Square: React.FC<SquareProps> = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        if (updateBoard !== undefined && index !== undefined) updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}