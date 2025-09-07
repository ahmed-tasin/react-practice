import { useState } from "react"


function OnChange(){
        const [Message, setMessage] = useState("please write something in the inbox") 

        const handlechange = (e)=> {
            setMessage(e.target.value)
        }
    return(
        <>
            <h3>{Message}</h3>
            <input type="text" onChange={handlechange} />
        </>
    )
}

export default OnChange;