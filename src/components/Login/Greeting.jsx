
function Greetings({IsLogIn}){
    return(
        <>
            {
                IsLogIn ? <h1>Welcome back</h1> : <h1>Please Log in first</h1>
            }
        </>
    )
}

export default Greetings;