import { useEffect, useState } from "react"
import CommonPage from "../layout/CommonPage/index"


export default function index() {
  const [body, setBody] = useState()
  
  useEffect(()=>{
    const callFunction = async ()=>{
      const res = await fetch("http://localhost:3000/api/employees")
      const responseJSON = await res.json()
      setBody(responseJSON.data)
    }
    callFunction()
    return ()=>{}
  },[])

  
  return (
    <CommonPage
      title="Employees" 
      btnTitle="Add New Employee" 
      
      header={["hashIndex","emp_email", "fn","ln","doj", "btns"]}

      body={body}

      buttons={[
        "loginBtn",
        "editBtn",
        "mailEPloginBtn",
        "deleteBtn",
        "welcomeMailBtn"
      ]}
    /> 
  )
}

