
import StudentInfo  from "./components/StudentInfo"
import StudentData from "./components/StudentData.json"
import UniqueId from "./components/UniqueId"
function App() {

  console.log(StudentData)
  return (
    <>

    <UniqueId />

    {StudentData.map((data)=> (
      < StudentInfo username={data.username} number={data.number} Address={data.Address} Role={data.Role} /> 
    ))}



      
      

    
    </>
  )
}

export default App

