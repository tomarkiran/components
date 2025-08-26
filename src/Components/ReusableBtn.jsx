import React from 'react'

const ReusableBtn =({label, onClick, style}) =>{
    return(
        <div>
            <button onClick= {onClick} style={style}>
                {label}
            </button>
        </div>
    )
}
export default ReusableBtn;