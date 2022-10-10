import Square from "./Square"

function Board({ turnCount }) {
  return (
      <div onClick={turnCount} className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
}

export default Board;