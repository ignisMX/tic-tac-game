import { useState } from "react"
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
                <div className="p-3 mb-4 bg-info text-dark text-center">
                    The Winner is player { winner }
                </div>
                <div className="row row-cols-3">
                    {board.map((value, index) => {
                        return (
                            <div className="col columns" key={`_id_${index}`}>
                                <Block index={index} value={value} onClick={onClick}/>
                            </div>
                            )
                    })}                 
                </div>
                <div className="row">
                    <button className="btn btn-primary reset-button" type="button">Reset</button>
                </div>
            </div>
}

export default HomePage