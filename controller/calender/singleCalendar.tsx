import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../styles/calendar.module.css"
import { calculateAttendence,  SingleCalendarBody,sunday, YearCode } from "./Handler"
import useSWR from "swr"



export default function componentName() {
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
    const array = new Array(month[currentMonth][1]).fill(0)                         //  initial array is used to initiliaze the calender
    const [checkYear, setCheckYear] = useState<number>(0)                           //  used to recylce the month name

    const [data, setData] = useState<any>()  
    
    const fetchAttendance =async ()=>{
        const response = await fetch(`http://localhost:3000/api/attendance/${query.id}?year=${currentYear}&month=${currentMonth-1}`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()

        setData(responseJSON.data)
    }
    useSWR(`http://localhost:3000/api/attendance/${query.id}?year=${currentYear}&month=${currentMonth-1}` ,fetchAttendance ,{refreshInterval: 0})

    


    //  trigger when left button click
    const handleShiftLeft=()=>{
        if(checkYear === 0){
            setCY(prev=>prev-1)
            setCheckYear(11)
            setCM(12)
            return
        }
        setCheckYear(prev=>prev-1)
        const changeMonth = (currentMonth+11)%12
        if(changeMonth === 0){
            setCM(12)
            return
        }
        setCM(changeMonth)
        
    }

    // trigger when right button click
    const handleShiftRight=()=>{
        if(checkYear === 12 || checkYear === 11){
            setCY(prev=>prev+1)
            setCheckYear(0)
            setCM(1)
            return
        }
        setCheckYear(prev=>prev+1)

        const changeMonth = (currentMonth)%12
        setCM(changeMonth+1)
        
        
    }

    // modify dates
    const setDates = () =>{
        const days = data &&data.map((item:any)=>(
                item.date
        ))
        const final = calculateAttendence({data:days, days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
        return final
    }



    

  return (
        <div className={`${styles.calendarContainer} ${styles.singlePageCalendar}`}>
            <h1>{query.name}</h1>
            <div className={styles.calendarHeading}>
                <span onClick={()=>handleShiftLeft()}>{"<<"}</span>
                <p className={styles.calenderTitle}>{month[currentMonth][0]} {currentYear}</p>
                <span onClick={()=>handleShiftRight()}>{">>"}</span>
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
                <SingleCalendarBody attendence={setDates()}/>
            </div>
        </div>
  );
}







