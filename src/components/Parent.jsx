import Child from "./Child";
function Parents(){
    const MyParent = ()=>{
        alert("You Have clicked the button")
    }
    return(

        <>
            <h3>Parent Components</h3>
            <Child MyFun={MyParent}  />
        </>
    )
}

export default Parents;