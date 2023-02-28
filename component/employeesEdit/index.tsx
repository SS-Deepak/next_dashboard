import { useEdit } from "@/pages/admin/employees/edit/[id]";
import { edit } from "@/services/editEmployeeAdminService";
import { settingEmployee } from "@/services/employeeService";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import Container from "./container"
import styles from "./index.module.css"
import { fetchDetails } from "@/services/employeeService";
import { useEmployeeEdit } from "@/pages/edit";

const employeeTypeContext = createContext({})

export default function componentName({emp}:any) {
  const[status, setStatus] = useState(true)
  const router  = useRouter()
  const edit  = emp ? useEmployeeEdit() :useEdit() as any
  const [data, setBody] = useState("") as any
  const [userId, setUserId] = useState("")

  
  useEffect(()=>{
    const data = localStorage.getItem("guestUser") as any
    const user = JSON.parse(data)
    const userID = user !== null && user.id 
    user !== null &&setUserId(userID)
  })
  let id = router.query.id  ?? userId
  fetchDetails({setBody, id, status, setStatus})

  return (
    <employeeTypeContext.Provider value={emp}>
      <div className={styles.editContainer}>
          <h1>Add/Edit Employees</h1>

          <div className={styles.detailsContainer}>
              {emp===true?<Container title="Personal Detail" value={data!==undefined&&data} list={["Email", "Password", "First Name", "Last Name", "DOB", "Gender", "Father Name", "Mother Name", "Religion", "Nationality"]}/>
              :<Container title="Personal Detail" value={data!==undefined&&data} list={["Email", "Password", "First Name", "Last Name", "DOB", "Gender", "Father Name", "Mother Name", "Religion", "Nationality", "Role"]}/>}
              
              <Container title="Joining Details" value={data!==undefined&&data} list={["DOJ", "Designation", "Department", "Resume", "Employee Photograph"]}/>
              {emp===true?null:
              <>
              <Container title="Offer Details" value={data!==undefined&&data} list={["Offer Letter Date", "Offer Joining Date", "Salary", "Designation"]}/>
              <Container title="Resignation Details" value={data!==undefined&&data} list={["Resignation Date", "Review"]}/>
              </>}
              <Container title="Bank Details" value={data!==undefined&&data} list={["Bank Name", "Account Number", "Bank IFSC Code", "Branch Name", "Name on Account"]}/>
              <Container title="Permanent Address" value={data!==undefined&&data} list={["Address", "Address Line 2", "City", "State", "ZIP", "Country", "Phone Number","PAN No","Passport No", "Driving Licence No"]}/>
              <Container title="Mailing Address" value={data!==undefined&&data} list={["Address", "Address Line 2", "City", "State","ZIP","Country","Time Zone", "Phone Number"]}/>

              <button onClick={()=>filterData({data: edit.finalData},router, setStatus)}>Save</button>
          </div>
      </div>
    </employeeTypeContext.Provider>
  );
}

export const useEmployeeType = () => useContext(employeeTypeContext)

const filterData = (data:any, router:any,setStatus:any) =>{
  settingEmployee(data, setStatus, {id: router.query.id})
  router.reload()
}