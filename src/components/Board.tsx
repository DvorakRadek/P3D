import { useRef, useState } from "react";
import checkVictory from "../utils/checkVictory";
import { Move, Player } from "../common/types";
import Dialog from "./ui/Dialog";
import { toggleModal } from "../utils/togglemodal";

const rows = [1, 2, 3, 4];
const cols = [1, 2, 3, 4];
const levels = [1, 2, 3, 4];

const moves: Move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<Player>('x');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const changePlayer = () => {
    setPlayer((prevPlayer) => prevPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <div>
      <h1 className="text-center mb-20">Player's <span className="font-bold">{player.toUpperCase()}</span> turn</h1>
      <Dialog ref={dialogRef} player={player} onCancel={() => toggleModal(dialogRef)} />
      <div ref={boardRef} className="grid grid-cols-4 gap-8">
        {levels.map((level) => {
          return (
            <div className="grid grid-cols-4 border-2" key={level}>
              {cols.map((col) => {
                return (
                  <div key={col}>
                    {rows.map((row) => {
                      return (
                        <div
                          key={row}
                          className="border w-20 h-20 flex justify-center items-center text-5xl"
                          onClick={(e) => {
                            if (e.currentTarget.textContent) return;
                            e.currentTarget.textContent = player;
                            const lastMove = {player, coordinates: { row, col, level }};
                            moves.push(lastMove);
                            if (checkVictory(player, moves, lastMove)) {
                              toggleModal(dialogRef);
                              boardRef.current?.setAttribute('inert', 'true');
                            } else changePlayer();
                        }}></div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Board
