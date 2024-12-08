import { useState } from "react"
import '../App.css'

function TicTacToe() {
    const [board, setBoard] = useState<(null | string)[]>(new Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
    ]

    const handleClick = (index: number) => {
        let oldBoard = [...board]
        if (isXNext) {
            oldBoard[index] = 'X'
            setIsXNext(!isXNext)
            setBoard(oldBoard)
            checkWinningStatus(oldBoard)
        } else {
            oldBoard[index] = 'O'
            setIsXNext(!isXNext)
            setBoard(oldBoard)
            checkWinningStatus(oldBoard)
        }
    }

    const checkWinningStatus = (currentBoard: (null | string)[]) => {
        const isWinnerSelected = winningPattern.some((pattern: number[]) =>
            currentBoard[pattern[0]] &&
            currentBoard[pattern[0]] === currentBoard[pattern[1]] &&
            currentBoard[pattern[0]] === currentBoard[pattern[2]]
        );

        if (isWinnerSelected) {
            alert(`${isXNext ? 'X' : 'O'} wins!!!`);
            const newBoard = new Array(9).fill(null)
            setBoard(newBoard)
            return
        } else if (!currentBoard.some((cell: string | null) => cell == null)) {
            alert(`It's a draw`);
            const newBoard = new Array(9).fill(null)
            setBoard(newBoard)
            return
        }
    };

    return (
        <>
            <div className="title">{isXNext ? 'X' : 'O'} 's Turn</div>
            <div className="board-container">
                {
                    board.map((cell: string | null, index: number) => <button disabled={cell !== null} onClick={() => handleClick(index)} className="board-cell" key={index}>{cell}</button>)
                }
            </div>
        </>
    )
}

export default TicTacToe
