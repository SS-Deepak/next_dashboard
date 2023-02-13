'client only'
import { useEffect, useState } from "react"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"
import {addAttendance} from "@/services/calender"
import { useRouter } from "next/router"


export default function index({data}:any) {
  const router = useRouter()
  const [check, setCheck] = useState<any>({
    type: "timein"
  })
  const [dateTime, setDateTime] = useState<any>()

  // const date = new Date(Date.now()).toLocaleDateString()
  useEffect(()=>{
    const date  = new Date(Date.now()).toLocaleDateString()
    const hr = Math.abs( new Date(Date.now()).getHours()-12)%12
    const mn  = new Date(Date.now()).getMinutes()
    const Desi = new Date(Date.now()).getHours()>11 ? "PM": "AM"

    setDateTime(`${date} ${hr}:${mn} ${Desi}`)

  },[])

  const handleClick = () =>{
    const date = new Date(Date.now())
    
    // addAttendance(date, check.type)
    setTimeout(()=>[
      router.push("/attendance/single")
    ],2000)
  }
  

  return (
    <NavigationPanel>
      <div className={styles.EmployeeContainer}>
      <h2>Attendence</h2>
      <p>Current Date & Time: {dateTime}</p>
      <div className={`${styles.EmployeesList} ${styles.calendar}`}>
        
        <div className={styles.checkContainer}>
          <h5>Time: </h5>
          <div className={styles.checkDate}>
            <label htmlFor="Time In">Time In</label>
            <input type="radio" name="timein" id="in" defaultChecked onClick={()=>setCheck({...check, type: "timein"})}/>
          </div>
          <div className={styles.checkDate}>
            <label htmlFor="Time In">Time Out</label>
            <input type="radio" name="timeout" id="out"onClick={()=>setCheck({...check, type: "timeout"})} />
          </div>
        </div>

        <div className={styles.attendanceRemark}>
          <label htmlFor="remark">Remarks</label>
          <input type="text" placeholder="Enter Remarks"/>
        </div>

        <button onClick={()=>handleClick()}>Save</button>
      </div>
      </div>
    </NavigationPanel>
  )
}


