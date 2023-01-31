import Calendar from  "@/controller/calender"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"

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
        <Calendar/>
      </div>
      </div>
    </NavigationPanel>
  )
}
