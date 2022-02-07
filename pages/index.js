import { useEffect, useState } from "react"
import { Block } from '@components/block';
const HomePage = () => {

    const [winner, setWinner] = useState(null);
    const [xIsNext, setXIsNext] = useState(true);
    const [board,setBoard] = useState(Array(9).fill(null));

    const onClick = (_index) => {
        
        if(board[_index] == null && winner == null){
            const _board = [...board];
            _board[_index] = xIsNext ? 'X' : 'O';
            setBoard(_board);
            setXIsNext(!xIsNext);
            setWinner(calcWinner(_board));
        }
    }

    const calcWinner = (_board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

         for (let counter = 0; counter < lines.length; counter++) {
            const [a, b, c] = lines[counter];
            if (_board[a] && _board[a] === _board[b] && _board[a] === _board[c]) {
                return _board[a]
            }
        }

        return null;
    };

    return  <div className="container">
                The Winner is player { winner }
                <div className="row">
                    {board.map((value, index) => {
                        return (
                            <div className="col-4"  key={`_id_${index}`}>
                                <Block index={index} value={value} onClick={onClick}/>
                            </div>
                            )
                    })}                 
                </div>
            </div>
}

export default HomePage