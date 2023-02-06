import {Page} from "./List"
import {useState} from "react"
import useSWR from "swr"
import styles from "./index.module.css"

export default function index() {
    const [employees, setEmployees] = useState<any[]>([])
    const [holiday, setHolidays] = useState<any[]>([])
    

    const fetcher = async(list:string)=>{
        const response = await fetch(`http://localhost:3000/api/${list}`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()
        list === "employees" ?setEmployees(responseJSON.data):setHolidays(responseJSON.data)
    }


    useSWR(["http://localhost:3000/api/employees"],()=>fetcher("employees"))
    useSWR(["http://localhost:3000/api/holidays"],()=>fetcher("holidays"))

   
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

