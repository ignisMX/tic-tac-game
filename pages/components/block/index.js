import { useState } from "react"

export const Block = (props) =>{
    const { index, onClick, value } = props;

    return <div onClick={()=>{ onClick(index) }} className="border">{value} element</div>
}