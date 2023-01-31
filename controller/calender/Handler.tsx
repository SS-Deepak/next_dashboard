import { CalculateAttendence,  Attendence } from "../interface/List"
import { Days, EDaysN,EDaysH,EDaysS,EDaysP, EDaysNB } from "./tiles"

import styles from "../styles/calendar.module.css"
import { useRouter } from "next/router"


// month code is used to calculate the number of sundays
const monthCode:any={
    1:0,
    2:3,
    3:3,
    4:6,
    5:1,
    6:4,
    7:6,
    8:2,
    9:5,
    10:0,
    11:3,
    12:5,
}

// return last two digit of year
const YY =(year:number)=>{
    const str =String(year).substring(2,4)
    return Number(str)
}

// return yearcode
export const YearCode =(year:number)=>{
 return (YY(year) + (Math.round(YY(year)/ 4))) % 7
}

// check sunday
export const check_sunday = (days:number,month:number,year:number, YearCode:number)=>{
    let day = []
    for(let i=1; i<=days; i++){
        const res = (YearCode + monthCode[month] + 6 + i - Math.round(4-(year/4)) + 1) % 7
        if(res === 0){
            day.push(11)
            continue
        }
        day.push(0)
    }
    return day
}
export const sunday = (days:number,month:number,year:number, YearCode:number)=>{
    let day:any = []
    for(let i=1; i<days+1; i++){
        const res = (YearCode + monthCode[month] + 6 + i - Math.round(4-(year/4)) + 1) % 7
        if(res === 0){
            day.splice(i-1, 0, 11)
            continue
        }
        day.splice(i-1, 0, 0)
    }
    return day
}

//  make final attendece
export const calculateAttendence = ({data, days,month,year, YearCode}:CalculateAttendence)=>{
    let result:any = []
    const sunday = check_sunday(days,month,year,YearCode)
    const holiday = [26]

    // insert all sundays
    sunday.map((item:number,index:number)=>(
        result.splice(index, 0, item)
    ))

    //inset all working days
    data.map((item:number)=>(
        result.splice(item-1, 1, 13)
    ))
    // insert all holidays
    holiday.map((item:number)=>(
        result.splice(item-1, 1, 12)
    ))

    // fill empty space
    if(result.length<days){
        const len = result.length
        const res = new Array(days-len).fill(0)
        
        res.map((item, index)=>(
            result.splice(index+len, 0, item)
        ))
    }


    // returning attendence
    return result
}

// build top header of calendar
export const CalendarHead=({days}:any)=>{
    const arr =new Array(days).fill(1)
   return(
    <div className={`${styles.calenerDates} ${styles.topHeader}`}>
    <p className={styles.calenderItemHeader}>Names</p>
    {
        arr.map((item:number, index)=>(
            Days(item+index, index)
            ))
        }
    <p className={styles.calenderItemFooter}>Present</p>
    </div>
   )
}


//build cell of calendar
export const CalendarBody=({attendence,days}:Attendence)=>{
    const router = useRouter()
    

    return(
     <div className={styles.calenerDates}>
    
        <p className={styles.calenderItemHeader} onClick={()=>router.push({pathname: "/calendar/single", query:{name:attendence.name}})}>{attendence.name}</p>

        {
            !days?attendence.days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDaysS(item, index)
                }else if(item === 0){
                    return EDaysN(item,index)
                }else if(item === 13){
                    return EDaysP(item, index)
                }else if(item===12){
                    return EDaysH(item, index)
                }
            }):days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDaysS(item, index)
                }else if(item === 0){
                    return EDaysN(item,index)
                }else if(item === 13){
                    return EDaysP(item, index)
                }else if(item===12){
                    return EDaysH(item, index)
                }
            })
        }
            
        <p className={styles.calenderItemFooter}>
            {attendence.days.filter((item:number)=>item===13).length}
        </p>
     </div>
    )
}
//build cell of calendar
export const SingleCalendarBody=({attendence,days}:Attendence)=>{
    
    const sundayIndex = attendence.days.findIndex((item)=>item === 11)

    let addIndex = []
        if(sundayIndex>0){
            addIndex = new Array(7-sundayIndex).fill('')
        }else{
            addIndex.length = 0
        }
    const single = true

    return(
     <div className={styles.calenerDates}>
    
        <p className={styles.calenderItemHeader}>{attendence.name}</p>
        {
            (addIndex.length>0)&&(
                addIndex.map((item, index)=>(
                    EDaysNB(item,index)
                ))
            )
        }
        {
            !days?attendence.days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDaysS(item, index, single)
                }else if(item === 0){
                    return EDaysN(item,index,single)
                }else if(item === 13){
                    return EDaysP(item, index, single)
                }else if(item===12){
                    return EDaysH(item, index, single)
                }
            }):days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDaysS(item, index, single)
                }else if(item === 0){
                    return EDaysN(item,index,single)
                }else if(item === 13){
                    return EDaysP(item, index, single)
                }else if(item===12){
                    return EDaysH(item, index, single)
                }
            })
        }
            
        <p className={styles.calenderItemFooter}>
            {attendence.days.filter((item:number)=>item===13).length}
        </p>
     </div>
    )
}