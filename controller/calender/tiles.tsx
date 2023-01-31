import styles from "../styles/calendar.module.css"


// calender header tile
export const Days=(item:number, index:number)=>(
    <p className={styles.calendarItem} key={index}>{item}</p>
)

// normal day
export const EDaysN=(item:number, index:number, single?: boolean)=>(
    <div className={styles.EdayN} key={index}>
    <p className={`${styles.calendarItem} ${styles.normal}`}>{single?index+1:""}</p>
    <span>{item}</span>
    </div>
)

// holiday
export const EDaysH=(item:number, index:number, single?: boolean)=>(
    <div className={styles.EdayN} key={index}>
    <p className={`${styles.calendarItem} ${styles.holiday}`}>{single?index+1:""}</p>
    <span>{item}</span>
    </div>
)

// sunday
export const EDaysS=(item:number, index:number, single?: boolean)=>{
    return(
    <div className={styles.EdayN} key={index}>
    <p className={`${styles.calendarItem} ${styles.sunday}`}>{single?index+1:""}</p>
    <span>{item}</span>
    </div>
)}

// present day
export const EDaysP=(item:number, index:number, single?: boolean)=>(
    <div className={styles.EdayN} key={index}>
    <p className={`${styles.calendarItem} ${styles.present}`}>{single?index+1:""}</p>
    <span>{item}</span>
    </div>
)
