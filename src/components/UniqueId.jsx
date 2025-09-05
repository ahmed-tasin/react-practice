
function UniqueId(){
    const userList = [
        {
            id:1,
            name:"tasin",
            prof:"programmer",
            age:20,
            EnrolledCourses: [
                {
                    CourseId:100,
                    name:"JFWD",
                    price:5000,
                    module:120
                },
                {
                    CourseId:300,
                    name:"JFWmmD",
                    price:2000,
                    module:500
                },
                {
                    CourseId:600,
                    name:"JFWgsD",
                    price:6000,
                    module:150
                }
            ]
        },
        {
            id:2,
            name:"ahmed",
            prof:"learner",
            age:24,
            EnrolledCourses: [
                {
                    CourseId:100,
                    name:"JFWD",
                    price:5000,
                    module:120
                },
                {
                    CourseId:300,
                    name:"JFWmmD",
                    price:2000,
                    module:500
                },
                {
                    CourseId:600,
                    name:"JFWgsD",
                    price:6000,
                    module:150
                }
            ]
        },
        {
            id:3,
            name:"arafat",
            prof:"student",
            age:19,
            EnrolledCourses: [
                {
                    CourseId:100,
                    name:"JFWD",
                    price:5000,
                    module:120
                },
                {
                    CourseId:300,
                    name:"JFWmmD",
                    price:2000,
                    module:500
                },
                {
                    CourseId:600,
                    name:"JFWgsD",
                    price:6000,
                    module:150
                }
            ]
        },

        
    ]
    return(
        <>
        <h2>List of user</h2>
        {userList.map((userInfo)=>(
            <div key={userInfo.id}>
                <p>{userInfo.name}</p>
                <p>{userInfo.prof}</p>
                <p>{userInfo.age}</p>
                <p>{userInfo.id}</p>
                <br />
                <h3>Enrolled courses list</h3>
                <ul key={userInfo.id}>
                    {
                        userInfo.EnrolledCourses.map((courses)=> (
                            <li key={courses.CourseId}>
                                <span>Course Name {courses.name}, </span>
                                <span>Course Module {courses.module}, </span>
                                <span>Course Price {courses.price}, </span>
                            </li>
                        ))
                    }
                </ul>

            </div>
        ))}
        
        </>
    )
}

export default UniqueId