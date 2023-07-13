import { Square } from './Square'

export const Board = ({ board, updateBoard }) => {
  return (
    <section className='game'>
      {board.map((square, index) => {
        return (
          <div className='cell' key={index}>
            <span className='cell__content'>
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            </span>
          </div>
        )
      })}
    </section>
  )
}
