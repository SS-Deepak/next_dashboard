import Calendar from  "../../controller/calender/singleCalendar"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"
import style from "../../controller/styles/calendar.module.css"

export default function index() {
  return (
    <NavigationPanel>
      <div className={styles.EmployeeContainer}>
      <h2>Attendence</h2>
      <div className={`${styles.EmployeesList} ${styles.compensation}`}>
        <div className={styles.upperHeader}>
            <h3></h3>  
            <p>Add New Attendence</p>    
        </div>
        <div className={style.singleCalender}>
            <Calendar/>
        </div>
      </div>
      </div>
    </NavigationPanel>
  )
}
