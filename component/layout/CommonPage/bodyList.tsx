import styles from "./index.module.css" 
import {ListButtons, ListPanel} from "./commonList"
import stylesData from "../../../controller/headerList/index.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface Props{
    page?:string,
    body:any,
    button:any,
    personal?:any
}


export default function componentName({page,body, button,personal}:Props) {
    const [data, setData] = useState(body)
    const router = useRouter()
    const btns = button && ListButtons.map(btn=>button.includes(btn.key))
    
    useEffect(()=>{
        if(page !== undefined){
            setData(body[page])
        }
            
        return ()=>{}
    },[page])

    console.log(data, body, page)

    return (
        <div className={styles.listContainer}>
    {
        data&&data.length>0? data.map((list:any, Bodyindex:any)=>{
            const data = Object.keys(body && list)    // it will return keys if body data exist
            const filterData = ListPanel.filter((item)=>data.includes(item.key))   // it will return filterd data from json file
            return(
                
                // single list
                <div key={Bodyindex} className={styles.employeesListContainer}>

                {/* data */}
                <p className={stylesData.verySmall}>{Bodyindex+1}</p>
                {
                    filterData.map((item, index)=>{
                        const displayText = list[item.key]
                        const displayStyle= item.width

                        // work only in leave page -- for acceptance and rejection
                        const style = displayText === "Rejected" ? `${stylesData[displayStyle]} ${stylesData.danger}` :
                                     item.key === "email" ? `${stylesData[displayStyle]} ${stylesData.email}` :
                                    displayText === "Accepted" ? `${stylesData[displayStyle]} ${stylesData.success}` :
                                     stylesData[displayStyle]
                        return(
                            <p key={index} className={style} onClick={()=>item.key === "email" && router.push(`/employees/detail/${list.id}`)}>{displayText}</p>
                        )
                    })
                }


                {/* buttons */}
                <div className={styles.employeeListLinks}>
                    {
                        ListButtons.map((item, index)=>(
                            button && btns[index] === true && <button key={index} className={styles[item.color]}>{item.title}</button>
                        ))
                    }
                </div>
            </div>
        )}):
        <p className={styles.noRecord}>There is no record found</p>
    }

    </div>
  );
}
