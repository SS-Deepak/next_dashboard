import {  useState, createContext, useContext } from "react"
import CommonPage from "../layout/CommonPage/index"
import { fetchEmployees } from "@/services/employee"
import AddEmployee from "../Modals/Employee/addEmployee"
import {DeleteModal} from "../Modals/Delete/delete"

const employeeContext = createContext({})

export default function index() {
  const [body, setBody] = useState() as any
  const [paging, setPaging] = useState() as any
  const [status, setStatus] = useState(true)

  fetchEmployees({setBody})

  if(body!==undefined && status){
    const data = Object.entries(body)

    const filterData= data.filter((item:any)=>{
      return(
        !["pagingCounter","data","status"].includes(item[0])
      )
    })
    setPaging(Object.fromEntries(filterData))
    setStatus(false)
  }

  

  return (
    <employeeContext.Provider value={{body, setBody}}>

      <CommonPage
        title="Employees" 
        btnTitle="Add New Employee" 
        
        header={["hashIndex","emp_email", "fn","ln","doj", "btns"]}

        // body={body && body.data}
        pagination={paging}
        buttons={[
          "loginBtn",
          "editBtn",
          "mailEPloginBtn",
          "deleteBtn",
          "welcomeMailBtn"
        ]}
        modal={AddEmployee}
        deleteModal = {DeleteModal}
      /> 
    </employeeContext.Provider>

  )
}

export const useEmployee = () =>useContext(employeeContext)