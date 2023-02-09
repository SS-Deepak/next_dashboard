import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/calendar.module.css"
import { setDates,  SingleCalendarBody, YearCode , handleShiftLeft, handleShiftRight} from "./Handler"
import { fetchSingleCalendar } from "@/services/calender"

export default function componentName({doj}:any) {
    const {query} = useRouter()
    const [month] = useState<any>({             // month with Name and number of days
        1: ["January", 31],
        2: ["Febuary",28],
        3: ["March",31],
        4: ["April",30],
        5: ["May",31],
        6: ["June",30],
        7: ["July",31],
        8: ["August",31],
        9: ["September",30],
        10: ["October",31],
        11: ["November",30],
        12: ["December",31]
    })
    const [currentMonth, setCM]=useState<number>(new Date().getMonth()+1)           //  current month
    const [currentYear, setCY]=useState(new Date().getFullYear())                   //  current Year
    const yearCode = YearCode(currentYear)  
    const [checkYear, setCheckYear] = useState<number>(0)                           //  used to recylce the month name
    const [data, setData] = useState<any>()  
    
    
    fetchSingleCalendar({id:query.id, currentMonth, currentYear, doj, setData})
    const setDate = setDates({data, month, currentMonth, currentYear, yearCode,single:true}) as any


  return (
        <div className={`${styles.calendarContainer} ${styles.singlePageCalendar}`}>
            <h1>{query.name}</h1>
            <div className={styles.calendarHeading}>
            <span onClick={()=>handleShiftLeft({setCY,setCM,setCheckYear,currentMonth,checkYear})}>{"<<"}</span>

                <p className={styles.calenderTitle}>{month[currentMonth][0]} {currentYear}</p>
                <span onClick={()=>handleShiftRight({checkYear,setCY,setCheckYear,setCM,currentMonth})}>{">>"}</span>

            </div>
            <div className={styles.calendarBody}>
                <div className={styles.singlealendarHeader}>
                    <p>Sunday</p>
                    <p>Monday</p>
                    <p>Tueday</p>
                    <p>Webnesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                </div>
                <SingleCalendarBody attendence={setDate}/>
            </div>
        </div>
  );
}







