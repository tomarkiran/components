import React from 'react'

const Reusable = ({title, description, footer}) =>{
    return(
        <div 
        style={{
            border:"1px solid gray",
            borderRadius: "10px",
            padding:"10px",
            margin:"10px",
            width:"200px"
        }}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            {footer && <small style={{color:"gray"}}>{footer}</small>}

        </div>
    )
}

export default Reusable