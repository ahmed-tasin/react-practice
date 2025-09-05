
import StudentInfo  from "./components/StudentInfo"
import StudentData from "./components/StudentData.json"
function App() {

  console.log(StudentData)
  return (
    <>

    {StudentData.map((data)=> (
      < StudentInfo username={data.username} number={data.number} Address={data.Address} Role={data.Role} /> 
    ))}



      
      

    
    </>
  )
}

export default App

