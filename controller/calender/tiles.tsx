import styles from "../styles/calendar.module.css"


// calender header tile
export const Days=(item:number, index:number)=>(
    <p className={styles.calendarItem} key={index}>{item}</p>
)

// normal day
export const EDaysNB=(item:number, index:number)=>{
    return(
        <div className={styles.EdayN} key={index}>
        <p className={`${styles.calendarItem} ${styles.normal}`}></p>
        </div>
    )
}

// normal day
export const EDays=(item:number, index:number, single?: boolean, color?: any, tag?: any)=>{
    
    return(
        <div className={styles.EdayN} key={index}>
        <p className={`${styles.calendarItem} ${styles[color]}`}>{single?index+1:""}</p>
        
        { item !== 0 && !single && <span>{
                item === 11 ? "Sunday":
                item === 12 ? "Holiday":
                item === 13 ? `${tag?.timeIn}____${tag?.timeOut}`: null
            }</span>}
        </div>
    )
}

