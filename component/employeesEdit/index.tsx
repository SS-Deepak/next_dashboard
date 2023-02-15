import { useEdit } from "@/pages/admin/employees/edit/[id]";
import { edit } from "@/services/editEmployeeAdmin";
import { useRouter } from "next/router";
import { useState } from "react";
import Container from "./container"
import styles from "./index.module.css"

export default function componentName() {
  const[status, setStatus] = useState()
  const router  = useRouter()
  const edit  = useEdit()

  if(status){
    alert("Details updated successfully✔✔")
    router.push("/employees")
  }
  
  return (
    <div className={styles.editContainer}>
        <h1>Add/Edit Employees</h1>
        <div className={styles.detailsContainer}>
            <Container title="Personal Detail" list={["Email", "Password", "First Name", "Last Name", "DOB", "Gender", "Father Name", "Mother Name", "Religion", "Nationality"]}/>
            <Container title="Joining Details" list={["DOJ", "Designation", "Department", "Resume", "Employee Photograph"]}/>
            <Container title="Offer Details" list={["Offer Letter Date", "Offer Joining Date", "Salary", "Designation"]}/>
            <Container title="Resignation Details" list={["Resignation Date", "Review"]}/>
            <Container title="Bank Details" list={["Bank Name", "Account Number", "Bank IFSC Code", "Branch Name", "Name on Account"]}/>
            <Container title="Permanent Address" list={["Address", "Address Line 2", "City", "State", "ZIP", "Country", "Phone Number","PAN No","Passport No", "Driving Licence No"]}/>
            <Container title="Mailing Address" list={["Address", "Address Line 2", "City", "State","ZIP","Country","Time Zone", "Phone Number"]}/>

            <button onClick={()=>filterData(edit,router.query, setStatus)}>Save</button>
        </div>
    </div>
  );
}


const filterData = (data:any, query:any,setStatus:any) =>{
  const filterResponse = Object.entries(data).filter((item:any)=>(
    item[1] !== ""
  ))
  filterResponse.pop()
  const result = Object.fromEntries(filterResponse)
  
  edit(query.id, result, setStatus)
}