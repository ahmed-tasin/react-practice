
function UniqueId(){
    const userList = [
        {
            id:1,
            name:"tasin",
            prof:"programmer",
            age:20
        },
        {   id:2,
            name:"sourov",
            prof:"student",
            age:15
        },
        {   id:3,
            name:"easin",
            prof:"teacher",
            age:26
        }
        
    ]
    return(
        <>
        <h2>List of user</h2>
        <div>
            {userList.map((person)=>(
                <ul key={person.id}>
                    <li>{person.id}</li>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.prof}</li>
                </ul>

            ))}
        </div>
        </>
    )
}

export default UniqueId