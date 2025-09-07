import Greetings from "./Greeting"
import { useState } from "react"
function Login() {
    const [IsLoggedIn, SetLoggedIn] = useState(false)
    return (
        <>
            <button onClick={()=> SetLoggedIn(!IsLoggedIn)}>
                {IsLoggedIn ? "Log Out" : "Log In"}
            </button>

            <Greetings IsLogIn ={IsLoggedIn} />
        </>
    )
}

export default Login;