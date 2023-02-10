import {  useState } from "react"
import CommonPage from "../layout/CommonPage/index"
import { fetchEmployees } from "@/services/employee"
import AddEmployee from "../Modals/Employee/addEmployee"
import {DeleteModal} from "../Modals/Delete/delete"

export default function index() {
  const [body, setBody] = useState()

  fetchEmployees({setBody})

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
      modal={AddEmployee}
      deleteModal = {DeleteModal}
    /> 
  )
}

