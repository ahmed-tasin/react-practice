import { useState } from "react"
import MyDate from "./Date"

function MyState(){
    const [MyData, setDate] = useState(0); //state, setstate

    const DateChange = ()=> {
        setDate(MyData + 1)
    }
    return(
        <>
            <p>{MyData}</p>
            <button onClick={DateChange}>Count</button>
        </>
    )
}


export default MyState;