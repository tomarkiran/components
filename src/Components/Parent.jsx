import React, { useState } from 'react'
import Child from './Child'

const Parent =()=>{
    const [message, setMessage] = useState("")

    const handleChildData = (data) => {
        setMessage(data)
    }
    return(
        <div>
        <h2>Parent Component</h2>
        <Child sendDataToParent={handleChildData}/>

        <p>Message from Child : {message}</p>
        </div>
    )
}

export default Parent;