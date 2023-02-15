import Calendar from  "../../controller/calender/singleCalendar"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"
import style from "../../controller/styles/calendar.module.css"
import Modal from "@mui/material/Modal"
import {useEffect, useState} from "react"
// import Holiday from "../../../component/Modals/AddAttendance/add"

export default function index() {

  
  return (
    <NavigationPanel>
      <div className={styles.EmployeeContainer}>
      <h2>Attendence</h2>
      <div className={`${styles.EmployeesList} ${styles.ecalendar}`}>
        
      
        <div className={style.singleCalender}>
            <Calendar employee={true}/>
        </div>
      </div>
      </div>
    </NavigationPanel>

  )
}




// export const getServerideProps=async(context: any)=>{
//     const {query} = context

//     const user =  await fetch(`http://localhost:3000/api/attendance/${query.id}?year=${currentYear}&month=${currentMonth-1}`,{
//         headers: {
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     })
//     const responseJSON = await user.json()
//     console.log(responseJSON)
// }