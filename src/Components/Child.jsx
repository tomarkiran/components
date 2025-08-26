import React from 'react'

const Child = ({sendDataToParent}) => {
    return(
        <div>
            <h3>Child Component</h3>
            <button onClick={()=> sendDataToParent("Data From Child")}>
                Send Message
            </button>
        </div>
    )
}
export default Child;