import styles from "./index.module.css" 
import {ListButtons, ListPanel} from "./commonList"
import stylesData from "../../../controller/headerList/index.module.css"



export default function componentName({body, button}) {
    const btns = button && ListButtons.map(btn=>button.includes(btn.key))
    
    
    return (
        <div className={styles.listContainer}>
    {
        body.map((list, index)=>{
            const data = Object.keys(body && list)    // it will return keys if body data exist
            const filterData = ListPanel.filter((item)=>data.includes(item.key))   // it will return filterd data from json file
            
            return(
                
                // single list
                <div key={index} className={styles.employeesListContainer}>

                {/* data */}
                <p className={stylesData.verySmall}>{index+1}</p>
                {
                    filterData.map((item, index)=>{
                        const displayText = list[item.key]
                        const displayStyle= item.width

                        // work only in leave page -- for acceptance and rejection
                        const style = displayText === "Rejected" ? `${stylesData[displayStyle]} ${stylesData.danger}` :
                                    displayText === "Accepted" ? `${stylesData[displayStyle]} ${stylesData.success}` :
                                     stylesData[displayStyle]

                        return(
                            <p key={index} className={style}>{displayText}</p>
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
        )})
    }

    </div>
  );
}
