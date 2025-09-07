

function MyList(){
    const User = [
        {
            id:1,
            name:"John",
            prof:"Programmer"
        },
        {
            id:2,
            name:"cvhn",
            prof:"Programmer"
        },
        {
            id:3,
            name:"honey",
            prof:"Programmer"
        }
    ]
    return(
        <>
            {
                User.map((MyUsers)=> (
                    <li key={MyUsers.id}>
                        {MyUsers.name} , {MyUsers.prof}, {MyUsers.id}
                    </li>
                ))
            }

        </>
    )
}

export default MyList;