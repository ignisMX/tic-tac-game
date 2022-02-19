export const Block = (props) =>{

    const { index, onClick, value } = props;

    const Symbol = () => {
        let tag = <i className=""></i>
        if(value != null && value != undefined){
            tag = <i className={`${value == 'X' ? 'bi-x symbolX' : 'bi-circle symbolO'}`}></i>
        }

        return tag;
    }

    return <div onClick={()=>{ onClick(index) }} className="border square">
                <Symbol />
            </div>
}