import List,{ListHeader} from "./List"
import styles from "./index.module.css"
import useSWR from "swr"
import {useState} from "react"

export default function index() {
    const [employees, setEmployees] = useState<any[]>([])
    const [holiday, setHolidays] = useState<any[]>([])
    const fetcher = async()=>{
        const employee = await fetch("http://localhost:3000/api/employees",{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        const holidays = await fetch("http://localhost:3000/api/holidays",{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })

        const emp = await employee.json()
        const holi = await holidays.json()

        setEmployees(emp.data)
        setHolidays(holi.data)
    }
    useSWR(["http://localhost:3000/api/employees"],fetcher)
    useSWR(["http://localhost:3000/api/holidays"],fetcher)

   
    return (
    <div className={styles.dashboardContainer}>
        <h1>Dashboard</h1>
        <div className={styles.dashboardData}>
            <div className={styles.dashboardList}>
                <h3>Upcoming Employee's Birthday</h3>
                <div className={styles.dashboardDetails}>

                    <ListHeader id="#" title="Name" date="Birthday"/>

                    <div className={styles.listEmp}>

                    {
                        employees.map((employee, index)=>{
                                const date =  new Date(employees[0].dob).toDateString().split(" ")
                                return(
                                    <List key={index} id={String(index)} title={employee.firstname} date={`${date[2]}-${date[1]}`}/>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.dashboardList}>
                <h3>Upcoming Holiday</h3>
                <div className={styles.dashboardDetails}>
                    <ListHeader id="#" title="Title" date="Date"/>

                    {
                        holiday.map((item, index)=>{
                            const date =  new Date(employees[0].dob).toDateString().split(" ")
                            return(
                                <List key={index} id={String(index)} title={item.title} date={`${date[2]}-${date[1]}`}/>
                                )

                        })
                    }
                </div>
            </div>
        </div>

        
    </div>
    
  )
}
