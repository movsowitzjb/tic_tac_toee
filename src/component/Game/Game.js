import { useState } from "react";
import Square from "./Square";
import Restart from "./Restart";
import calculateWinner from "./calculateWinner";
import isBoardFull from "./isBoardFull";
import { Link } from "react-router-dom";

const arr = Array(9).fill(null);

const Game = () => {
  const [squares, setSquares] = useState(arr);
  const [isNext, setIsNext] = useState(true);
  const nextSymbol = isNext ? "X" : "O";
  const winner = calculateWinner(squares);

  const renderSquare = (i) => {
    const squareHandler = () => {
      if (squares[i] != null || winner != null) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = nextSymbol;
      setSquares(nextSquares);
      setIsNext(!isNext);
    };
    return <Square value={squares[i]} onClick={squareHandler} />;
  };

  const renderRestartButton = () => {
    const restartHandler = () => {
      setSquares(Array(9).fill(null));
      setIsNext(true);
    };
    return <Restart onClick={restartHandler} />;
  };
  const getStatus = () => {
    if (winner) {
      return "Winner:" + winner;
    } else if (isBoardFull(squares)) {
      return "Draw";
    } else {
      return "Next Player:" + nextSymbol;
    }
  };
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
  );
};

export default Game;
