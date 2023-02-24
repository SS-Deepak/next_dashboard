import {Page} from "./List"
import {useState} from "react"
import { fetchData } from "@/services/dashboardService"
import styles from "./index.module.css"

export default function index() {
    const [employees, setEmployees] = useState<any[]>([])
    const [holiday, setHolidays] = useState<any[]>([])
    
    fetchData({setEmployees, setHolidays})
  
    return (
    <div className={styles.dashboardContainer}>
        <h1>Dashboard</h1>
        <div className={styles.dashboardData}>
            <Page title="Upcoming Employee's Birthday" headerTitle={["Name", "Birthday"]} data={employees}/>
            <Page title="Upcoming Holiday" headerTitle={["Title", "Date"]} data={holiday}/>
        </div>
    </div>
  )
}

