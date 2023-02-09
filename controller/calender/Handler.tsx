import { CalculateAttendence,  Attendence } from "../interface/List"
import { Days, EDays, EDaysNB } from "./tiles"

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
export const calculateAttendence1 = ({data, days,month,year,holidays, YearCode}:any)=>{

    let result:any = []
    const sunday = check_sunday(days,month,year,YearCode)
    const holiday = holidays

    // insert all sundays
    sunday.map((item:number,index:number)=>(
        result.splice(index, 0, item)
    ))

    //inset all working days
    data &&data.map((item:number)=>(
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
    data &&data.map((item:number)=>(
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
export const CalendarBody=({attendence,name,days, id, tag}:Attendence)=>{
    const router = useRouter()
    return(
     <div className={styles.calenerDates}>
    
        <p className={styles.calenderItemHeader} onClick={()=>router.push({pathname: "/calendar/single", query:{name, id}})}>{name}</p>

        {
            !days?attendence.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDays(item, index,false,"sunday",tag)
                }else if(item === 0){
                    return EDays(item,index,false,"normal",tag)
                }else if(item === 13){
                    return EDays(item, index,false,"present",tag)
                }else if(item===12){
                    return EDays(item, index,false,"holiday",tag)
                }
            }):days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDays(item, index,false,"sunday",tag)
                }else if(item === 0){
                    return EDays(item,index,false,"normal",tag)
                }else if(item === 13){
                    return EDays(item, index,false,"present",tag)
                }else if(item===12){
                    return EDays(item, index,false,"holiday",tag)
                }
            })
        }
            
        <p className={styles.calenderItemFooter}>
            {attendence.filter((item:number)=>item===13).length}
        </p>
     </div>
    )
}
//build cell of calendar
export const SingleCalendarBody=({attendence,name,days}:Attendence)=>{
    
    const sundayIndex = attendence.findIndex((item:any)=>item === 11)

    let addIndex = []
        if(sundayIndex>0){
            addIndex = new Array(7-sundayIndex).fill('')
        }else{
            addIndex.length = 0
        }
    const single = true

    return(
     <div className={styles.calenerDates}>
    
        <p className={styles.calenderItemHeader}>{name}</p>
        {
            (addIndex.length>0)&&(
                addIndex.map((item, index)=>(
                    EDaysNB(item,index)
                ))
            )
        }
        {
            !days?attendence.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDays(item, index,single,"sunday")
                }else if(item === 0){
                    return EDays(item,index,single,"normal")
                }else if(item === 13){
                    return EDays(item, index,single,"present")
                }else if(item===12){
                    return EDays(item, index,single,"holiday")
                }
            }):days.map((item:number,index:number)=>{
                
                if(item === 11){
                    return EDays(item, index,single,"sunday")
                }else if(item === 0){
                    return EDays(item,index,single,"normal")
                }else if(item === 13){
                    return EDays(item, index,single,"present")
                }else if(item===12){
                    return EDays(item, index,single,"holiday")
                }
            })
        }
            
        <p className={styles.calenderItemFooter}>
            {attendence.filter((item:number)=>item===13).length}
        </p>
     </div>
    )
}




// return proper format of dates for preview
export const setDates = ({data,currentMonth,yearCode,currentYear,month, single}:any) =>{
    const calculate = (data:any) =>{
        return calculateAttendence({data,days:month[currentMonth][1],month:currentMonth, YearCode:yearCode, year: currentYear})
    }
    
    // return when single [page] calendar access this
    if(single){
        const days = data &&data.map((item:any)=>(
            item.date
        ))
        const final = calculate(days)
        return final
    }

    // continue when home [page] calendar access this
    const days = data &&data.map((item:any)=>(
        item.attendance.month.days.map((item1:any)=>(
            item1.date
        ))
    ))
    const tags = data &&data.map((item:any)=>(
        item.attendance.month.days.map((item1:any)=>(
            {
                timeIn: item1.timeIn,
                timeOut: item1.timeOut
            }
        ))
    ))
    const names = data &&data.map((item:any)=>(
            item.name
    )) as string[]
    const ids = data &&data.map((item:any)=>(
            item.user
    )) as string[]

   

    const final = days &&days.map((item:any)=>(
        calculate(item)
    )) as Number[]
    
    return [final,names,ids, tags]
}


//  trigger when left button click
export const handleShiftLeft=({setCY,setCM,setCheckYear,currentMonth,checkYear}:any)=>{
    if(checkYear === 0){
        setCY((prev:any)=>prev-1)
        setCheckYear(11)
        setCM(12)
        return
    }
    setCheckYear((prev:any)=>prev-1)
    const changeMonth = (currentMonth+11)%12
    if(changeMonth === 0){
        setCM(12)
        return
    }
    setCM(changeMonth)
    
}

// trigger when right button click
export const handleShiftRight=({checkYear,setCY,setCheckYear,setCM,currentMonth}:any)=>{
    if(checkYear === 12 || checkYear === 11){
        setCY((prev:any)=>prev+1)
        setCheckYear(0)
        setCM(1)
        return
    }
    setCheckYear((prev:any)=>prev+1)

    const changeMonth = (currentMonth)%12
    setCM(changeMonth+1)
    
    
}