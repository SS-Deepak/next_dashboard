import { useState } from "react"
import styles from "../styles/calendar.module.css"
import { CalendarHead, CalendarBody, YearCode, setDates ,handleShiftLeft, handleShiftRight, holidayList } from "./Handler"
import { fetchMainCalendar } from "@/services/calender"


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
    const [checkYear, setCheckYear] = useState<number>(0)
    const [data, setData] = useState<any>()  
    const [holiday, setHoliday] = useState<any>()
   
    fetchMainCalendar({currentMonth, currentYear, setHoliday, setData})   
    
    const holidays = holidayList({holiday, currentMonth})
    const final = setDates({data, month,holidays, currentMonth, currentYear, yearCode,single:false}) as any
    console.log(final, data)
    return (
        <div className={`${styles.calendarContainer} ${styles.mainCalendar}`}>
            <div className={styles.calendarHeading}>
                <span onClick={()=>handleShiftLeft({setCY,setCM,setCheckYear,currentMonth,checkYear})}>{"<<"}</span>
                <p className={styles.calenderTitle}><span>{month[currentMonth][0]} {currentYear}</span></p>
                <span onClick={()=>handleShiftRight({checkYear,setCY,setCheckYear,setCM,currentMonth})}>{">>"}</span>
            </div>

            <div className={styles.calendarBody}>
                <CalendarHead days={month[currentMonth][1]}/>

                {
                    final[0] &&final[0].map((item:any, index:number)=>(
                        <CalendarBody 
                                key={index} 
                                attendence={final[0][index]} 
                                name={final[1][index]}
                                id={final[2][index]}
                                tag={final[3]&&final[3][0][index]}
                            />
                    ))

                }
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

