import { useState } from "react"

function MyEvent(){
    
            const [message, setMessage] = useState("click The Button")

            

            const HandleClick = ()=> {
                setMessage("Button was clicked")
            }
    
    return(
        <>
            <h3>{message}</h3>
            <button onClick={HandleClick}>click me</button>
        </>
    )
}


export default MyEvent;