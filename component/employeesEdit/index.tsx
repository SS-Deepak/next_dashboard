import { useEdit } from "@/pages/admin/employees/edit/[id]";
import { edit } from "@/services/editEmployeeAdmin";
import { settingEmployee } from "@/services/employee";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "./container"
import styles from "./index.module.css"
import { fetchDetails } from "@/services/employee";


export default function componentName() {
  const[status, setStatus] = useState(true)
  const router  = useRouter()
  const edit  = useEdit() as any
  const [data, setBody] = useState("") as any


  // if(status){
  //   alert("Details updated successfully✔✔")
  //   router.reload()
  // }
  console.log(edit.finalData)
  const id = router.query.id ?? ""
  fetchDetails({setBody, id, status, setStatus})

  return (
    <div className={styles.editContainer}>
        <h1>Add/Edit Employees</h1>
        <div className={styles.detailsContainer}>
            <Container title="Personal Detail" value={data!==undefined&&data} list={["Email", "Password", "First Name", "Last Name", "DOB", "Gender", "Father Name", "Mother Name", "Religion", "Nationality"]}/>
            <Container title="Joining Details" value={data!==undefined&&data} list={["DOJ", "Designation", "Department", "Resume", "Employee Photograph"]}/>
            <Container title="Offer Details" value={data!==undefined&&data} list={["Offer Letter Date", "Offer Joining Date", "Salary", "Designation"]}/>
            <Container title="Resignation Details" value={data!==undefined&&data} list={["Resignation Date", "Review"]}/>
            <Container title="Bank Details" value={data!==undefined&&data} list={["Bank Name", "Account Number", "Bank IFSC Code", "Branch Name", "Name on Account"]}/>
            <Container title="Permanent Address" value={data!==undefined&&data} list={["Address", "Address Line 2", "City", "State", "ZIP", "Country", "Phone Number","PAN No","Passport No", "Driving Licence No"]}/>
            <Container title="Mailing Address" value={data!==undefined&&data} list={["Address", "Address Line 2", "City", "State","ZIP","Country","Time Zone", "Phone Number"]}/>

            <button onClick={()=>filterData({data: edit.finalData},router, setStatus)}>Save</button>
        </div>
    </div>
  );
}


const filterData = (data:any, router:any,setStatus:any) =>{
  settingEmployee(data, setStatus, {id: router.query.id})
  router.reload()
  // const filterResponse = Object.entries(data).filter((item:any)=>(
  //   item[1] !== ""
  // ))
  // filterResponse.pop()
  // const result = Object.fromEntries(filterResponse)
  // console.log(result)

  // edit(query.id, result, setStatus)
}