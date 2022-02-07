import { useEffect, useState } from "react"
import { Block } from '@components/block';
const HomePage = () => {

    const [grid,setGrid] = useState([]);
    const [values, setValues] = useState([]);
    const [symbol, setSymbol] = useState('X');

    useEffect(()=>{
        createGrid();
    },[symbol])

    const changeSymbol = (_symbol) => {
        _symbol = _symbol == 'X'?'O':'X';
        setSymbol(_symbol);
    }

    const applyValue = (_symbol, index) => {
        const _values = [...values]
        _values[index] = _symbol;
        setValues(_values);
        changeSymbol(_symbol);
        console.log('after',_values);
    }

    const createGrid = () =>{
        const _grid = [];
        for(let counter = 1; counter < 10 ; counter ++){
            _grid.push(
                <div className="col-4"  key={`_id_${counter}`}>
                    <Block index={counter} symbol={symbol} applyValue={applyValue}/>
                </div>
                );
        }
        setGrid(_grid);            
    }

    return  <div className="container">
                <div className="row">
                    {grid}                 
                </div>
            </div>
}

export default HomePage