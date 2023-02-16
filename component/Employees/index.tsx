import {  useState, createContext, useContext } from "react"
import CommonPage from "../layout/CommonPage/index"
import { fetchEmployees } from "@/services/employee"
import AddEmployee from "../Modals/Employee/addEmployee"
import {DeleteModal} from "../Modals/Delete/delete"
import PaginatePanel from "../layout/CommonPage/CommonPagePagination"

export default function index() {
  

  return (
    <PaginatePanel 
          searchType="email"
          fetchData={fetchEmployees} 
          modal={{AddEmployee, DeleteModal}} 
          title="Employees" 
          btnTitle="Add New Employee" 
          header={["hashIndex","emp_email", "fn","ln","doj", "btns"]}
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