export const Block = (props) =>{
    const { index, onClick, value } = props;

    return <div onClick={()=>{ onClick(index) }} className="border square">{value}</div>
}