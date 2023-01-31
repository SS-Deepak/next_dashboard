import { useEffect, useState } from "react"
import styles from "../styles/calendar.module.css"
import { calculateAttendence, CalendarHead, CalendarBody,sunday, YearCode } from "./Handler"



export default function componentName() {
    const yearCode = YearCode(2023)             // yearcode of year to calculate sunday of a month
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
    const array = new Array(month[currentMonth][1]).fill(0)                         //  initial array is used to initiliaze the calender
    const [checkYear, setCheckYear] = useState<number>(0)                           //  used to recylce the month name
    const [dates1, setDates1] = useState<any>(array)                            
    const [dates2, setDates2] = useState<any>(array)
    
    // it trigger when attendence changes
    useEffect(()=>{
        setAttendence([
            {
                days:dates1,
                name: "Deepak"
            },
            {
                days:dates2,
                name: "Ishwer Sharma"
            }
        ])
    },[dates1, dates2])
    
    
    // it trigger when month changes
    useEffect(()=>{
        const data1 = calculateAttendence({data:[11,19,20,21,23],days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
        const data2 = calculateAttendence({data:[11,5,19,20,21,23,24,29],days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
        const holiday = sunday(month[currentMonth][1],currentMonth,currentYear, yearCode)

        setDates1(data1)
        setDates2(data2)
    },[currentMonth])


    // initial attendence
    const [attendence, setAttendence] = useState<any>([
        {
            days:dates1,
            name: "Deepak"
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
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeading}>
                <span onClick={()=>handleShiftLeft()}>{"<<"}</span>
                <p className={styles.calenderTitle}>{month[currentMonth][0]} {currentYear}</p>
                <span onClick={()=>handleShiftRight()}>{">>"}</span>
            </div>
            <div className={styles.calendarBody}>
                <CalendarHead days={month[currentMonth][1]}/>
                <CalendarBody attendence={attendence[0]}/>
                <CalendarBody attendence={attendence[1]} />
                <CalendarBody attendence={attendence[0]}/>
                <CalendarBody attendence={attendence[1]} />
            </div>
        </div>
  );
}

































































































































































// import { useState } from "react"
// import { monthProps } from "../interface/List"
// import styles from "../styles/calendar.module.css"

// let items:any[] = []
// export default function calculateDay() {
//     const [YY, setYY] = useState()
//     const [YYYY, setYYYY] = useState()
//     const [YearCode, setYearCode] = useState()
//     const [LeapCode, setLeapCode] = useState()
//     const [month, setMonth] = useState<any>({
//         1:0,
//         2:3,
//         3:3,
//         4:6,
//         5:1,
//         6:4,
//         7:6,
//         8:2,
//         9:5,
//         10:0,
//         11:3,
//         12:5,
//     })
//     const [century, setCentury] = useState()

//     const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    
// // console.log(month[4], "month")

//   return (
//     <div className={styles.calendarContainer}>
//         <div className={styles.Movement}>
//             <span onClick={()=>handleLeftCalender(1, month[1], 6, )}>{'<<'}</span>
//             <span>January</span>
//             <span onClick={()=>handleRightCalender()}>{'>>'}</span>
//         </div>

//         <div className={styles.employeeAttendence}>
//             <div className={styles.topattendence}>
//                 <span>Names</span>
//                 {
//                     dates.map((item:number, index:number)=>(
//                         <p key={index}>{item}</p>
//                     ))
//                 }
//                 <p className={styles.count}>Present</p>
//             </div>
//             <div className={styles.topattendence}>
//                 <span>Ishwer Sharma</span>
//                 {
//                     items?.map((item:string, index:number)=>{
//                         if(item === "#"){
//                             return <p className={styles.here} key={index}>{item}</p>
//                         }
//                         if(item === "^"){
//                             return <p className={styles.present} key={index}>{item}</p>
//                         }
//                         if(item === "+"){
//                             return <p className={styles.holiday} key={index}>{item}</p>
//                         }
//                         return <p key={index}>{item}</p>
//                     })
//                 }
//                 <p className={styles.count}>{items.filter((i)=>i==="^").length}</p>
//             </div>
//             <div className={styles.topattendence}>
//                 <span>Ishwer Sharma</span>
//                 {
//                     items?.map((item:string, index:number)=>{
//                         if(item === "#"){
//                             return <p className={styles.here} key={index}>{item}</p>
//                         }
//                         if(item === "^"){
//                             return <p className={styles.present} key={index}>{item}</p>
//                         }
//                         if(item === "+"){
//                             return <p className={styles.holiday} key={index}>{item}</p>
//                         }
//                         return <p key={index}>{item}</p>
//                     })
//                 }
//                 <p className={styles.count}>{items.filter((i)=>i==="^").length}</p>
//             </div>
//             <div className={styles.topattendence}>
//                 <span>Ishwer Sharma</span>
//                 {
//                     items?.map((item:string, index:number)=>{
//                         if(item === "#"){
//                             return <p className={styles.here} key={index}>{item}</p>
//                         }
//                         if(item === "^"){
//                             return <p className={styles.present} key={index}>{item}</p>
//                         }
//                         if(item === "+"){
//                             return <p className={styles.holiday} key={index}>{item}</p>
//                         }
//                         return <p key={index}>{item}</p>
//                     })
//                 }
//                 <p className={styles.count}>{items.filter((i)=>i==="^").length}</p>
//             </div>
//             <div className={styles.topattendence}>
//                 <span>Ishwer Sharma</span>
//                 {
//                     items?.map((item:string, index:number)=>{
//                         if(item === "#"){
//                             return <p className={styles.here} key={index}>{item}</p>
//                         }
//                         if(item === "^"){
//                             return <p className={styles.present} key={index}>{item}</p>
//                         }
//                         if(item === "+"){
//                             return <p className={styles.holiday} key={index}>{item}</p>
//                         }
//                         return <p key={index}>{item}</p>
//                     })
//                 }
//                 <p className={styles.count}>{items.filter((i)=>i==="^").length}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// const buildDays =()=>{
//     for(let i=1; i<31; i++){
//         if(i==15 || i== 29){
//             items.push("+")
//             continue
//         }
//         if(i===day || i===day+7 || i===day+14 || i===day+21 || i===day+28){
//             items.push("#")
//             continue
//         }
//         if(i>10 && i<20){
//             items.push("^")
//             continue
//         }
//         items.push("*")
//     }
// }
// interface Props {
//     YearCode: number,
//     month: number,
//     century: number,
//     date: number,
//     leap: number
// }

// const handleLeftCalender =({YearCode, month, century, date, leap}:Props )=>{
    
//     // const calc = (YearCode + month + century + date - leap + 1) % 7  
//     // const calc = (YearCode + month[1] + century[2000] + date - (4-aa) + 1) % 7  
//     buildDays()
// }
// const handleRightCalender =({YearCode, month, century, date, leap}:Props)=>{
    
//     const calc = (YearCode + month + century + date - (4-aa) + 1) % 7  
//     buildDays()
// }






// const YY = 23

// const month ={
//     1:0,
//     2:3,
//     3:3,
//     4:6,
//     5:1,
//     6:4,
//     7:6,
//     8:2,
//     9:5,
//     10:0,
//     11:3,
//     12:5,
// }

// const century={
//     1700 : 4,
//     1800 : 2,
//     1900 : 0,
//     2000 : 6,
//     2100 : 4,
//     2200 : 2,
//     2300 : 0
// }
// const YearCode = (YY + (Math.round(YY/ 4))) % 7

// // const Day = {
// //     0 : "Sunday",
// //     1 : "Monday",
// //     2 : "Tuesday",
// //     3 : "Wednesday",
// //     4 : "Thursday",
// //     5 : "Friday",
// //     6 : "Saturday"
// // }
// const YYYY = 2022
// // const date = 15

// const aa= (YYYY)/4
// // const a = (YYYY/4) === Math.round(YYYY/4)
// // const b = (YYYY/100) === Math.round(YYYY/100)
// // const c = (YYYY/400)  === Math.round(YYYY/400)

// // const LeapYearCode:any = a|| c && b
// let day = 6
// // console.log(LeapYearCode,a,b,c)

// // (Year Code + Month Code + Century Code + Date Number - Leap Year Code) mod 7

// // console.log(day)

