import { useState } from "react"

export const Block = (props) =>{
    const [value, setValue] = useState();

    const onClick = () => {
        if(value == '' || value == null){
            console.log('_symbol',props.symbol);
            setValue(props.symbol);
            props.applyValue(props.symbol, props.index);
        }
    }

    return <div onClick={onClick} className="border">{value} element</div>
}