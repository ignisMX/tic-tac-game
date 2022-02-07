import { useEffect, useState } from "react"
import { Block } from '@components/block';
const HomePage = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [board,setBoard] = useState(Array(9).fill(null));

    const onClick = (_index) => {
        if(board[_index] ==  null){
            const _board = [...board];
            _board[_index] = xIsNext ? 'X' : 'O';
            setBoard(_board);
            setXIsNext(!xIsNext);
        }
    }

    return  <div className="container">
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