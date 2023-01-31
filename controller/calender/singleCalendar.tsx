import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../styles/calendar.module.css"
import { calculateAttendence,  SingleCalendarBody,sunday, YearCode } from "./Handler"



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
    const [dates1, setDates1] = useState<any>(array)                            
    const [dates2, setDates2] = useState<any>(array)
    
    // it trigger when attendence changes
    useEffect(()=>{
        setAttendence([
            {
                days:dates1,
                name: "Ishwer Sharma"
            },
            {
                days:dates2,
                name: "Ishwer Sharma"
            }
        ])
    },[dates1, dates2])
    
    
    // it trigger when month changes
    useEffect(()=>{
        console.log("cyear", currentYear, yearCode)
        const data1 = calculateAttendence({data:[11,19,20,21,23],days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
        const data2 = calculateAttendence({data:[11,5,19,20,21,23,24,29],days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
        const holiday = sunday(month[currentMonth][1],currentMonth,currentYear, yearCode)

        setDates1(data1)
        setDates2(data2)
    },[currentMonth, currentYear])


    // initial attendence
    const [attendence, setAttendence] = useState<any>([
        {
            days:dates1,
            name: "Ishwer Sharma"
        },
        {
            days:dates2,
            name: "Ishwer Sharma"
        }
    ])


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
                <SingleCalendarBody attendence={attendence[0]}/>
            </div>
        </div>
  );
}







