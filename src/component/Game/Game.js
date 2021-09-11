import { useState, useEffect } from 'react'
import Square from './Square'
import Restart from './Restart'
import calculateWinner from './calculateWinner'
import isBoardFull from './isBoardFull'
import { Link } from 'react-router-dom'

const Game = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null))
  const [isNext, setIsNext] = useState(true)
  const [players, setPlayers] = useState({ human: 'X', computer: 'O' })
  const [xScore, setXScore] = []
  const [oScore, setOScore] = []
  const [draw, setDraw] = []
  const nextSymbol = isNext ? 'X' : 'O'
  const winner = calculateWinner(squares)

  useEffect(
    (i) => {
      const isComputerTurn =
        squares.filter((square) => square !== null).length % 2 === 1
      const emptyIndexes = squares
        .map((square, index) => (square === null ? index : null))
        .filter((val) => val !== null)

      const putComputerAt = (i) => {
        const nextSquares = squares.concat()
        nextSquares[i] = players.computer
        setSquares(nextSquares)
        setIsNext(!isNext)
      }
      if (isComputerTurn) {
        if (squares[i] != null || winner != null) {
          return
        }
        setTimeout(() => {
          const randomIndex =
            emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)]

          putComputerAt(randomIndex)
        }, 1500)
      }
    },
    [squares, winner, players, isNext]
  )

  const renderSquare = (i) => {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0
    const squareHandler = () => {
      if (isPlayerTurn) {
        const nextSquares = squares.concat()
        nextSquares[i] = players.human
        setSquares(nextSquares)
        setIsNext(!isNext)
      }
    }
    return <Square value={squares[i]} onClick={squareHandler} />
  }

  const renderRestartButton = () => {
    const restartHandler = () => {
      setSquares(Array(9).fill(null))

      setIsNext(!isNext)
    }
    return <Restart onClick={restartHandler} />
  }

  const getStatus = () => {
    if (winner) {
      return 'Winner:' + winner
    } else if (isBoardFull(squares)) {
      return 'Draw'
    } else {
      return 'Next Player:' + nextSymbol
    }
  }

  localStorage.setItem('scores', JSON.stringify(xScore))

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{getStatus()}</div>

        <div className="restart-button">{renderRestartButton()}</div>

        <div className="w-100 text-center mt-2">
          <Link to="/">Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Game
