import Calendar from  "@/controller/calender"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"



export default function index({data}:any) {
  return (
    <NavigationPanel>
      <div className={styles.EmployeeContainer}>
      <h2>Attendence</h2>
      <div className={`${styles.EmployeesList} ${styles.compensation}`}>
        
        <Calendar/>
      </div>
      </div>
    </NavigationPanel>
  )
}


