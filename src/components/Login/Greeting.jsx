
function Greetings({IsLogIn}){
    if(IsLogIn){
        return (
            <h1>Welcome back tasin</h1>
        )
    }else{
        return <h1>Please log in first</h1>
    }
}

export default Greetings;