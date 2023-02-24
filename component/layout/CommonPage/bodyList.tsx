import styles from "./index.module.css" 
import {ListButtons, ListPanel} from "./commonList"
import stylesData from "../../../controller/headerList/index.module.css"
import { useRouter } from "next/router"
import { deleteData } from "@/services/CRUD"
import {BodyListProps} from "@/models/layout"
import { usePaginate } from "@/component/layout/CommonPage/CommonPagePagination"
import { useEffect, useState } from "react"
import { LoginAsUser } from "@/services/loginAsUser"


export default function componentName({page, button,deletePopUp,dataBody, title ,searchType, search}:BodyListProps) {
    const router = useRouter()
    const {body} = usePaginate() as any
    const query = dataBody !== undefined ?dataBody.length > 1? dataBody: dataBody[0] === undefined?Array(dataBody):dataBody:body===undefined?[]:body.data
    const btns = button && ListButtons.map(btn=>button.includes(btn.key))
    
    const [dataFilter, setDataFilter] = useState() as any
    const renderData = search ? dataFilter: query

    // search filter
    useEffect(()=>{
        const filter = query?.filter((item:any)=>{
            const yes = String(item[searchType]).toLowerCase().search(String(search).toLowerCase())
            
            return  yes>-1 && item 
        })
        setDataFilter(filter)

        return ()=>{}
    },[search])

    return (
        <div className={styles.listContainer}>
    {
            renderData.length>0? renderData&&renderData.map((list:any, Bodyindex:any)=>{
            const data = Object.keys(list ? list: {})    // it will return keys if body&&body.data data exist
            const filterData = ListPanel.filter((item)=>data.includes(item.key))   // it will return filterd data from json file
            return(
                // single list
                <div key={Bodyindex} className={styles.employeesListContainer}>

                {/* data */}
                <p className={stylesData.verySmall}>{Bodyindex+1}</p>
                {
                    filterData.map((item, index)=>{
                        let displayText = list[item.key]

                        const displayStyle= item.width
                        // if(index === 2) displayText = " "

                        // work only in leave page -- for acceptance and rejection
                        const style = displayText === "Rejected" ? `${stylesData[displayStyle]} ${stylesData.danger}` :
                                     item.key === "email" ? `${stylesData[displayStyle]} ${stylesData.email}` :
                                    displayText === "Accepted" ? `${stylesData[displayStyle]} ${stylesData.success}` :
                                     stylesData[displayStyle]
                        return(
                            <p key={index} className={style} onClick={()=>item.key === "email" && router.push(`/admin/employees/detail/${list.id}`)}>{displayText}</p>
                        )
                    })
                }


                {/* buttons */}
                <div className={styles.employeeListLinks}>
                    {
                        ListButtons.map((item, index)=>{
                            const del = item.title === "Delete" 
                            const edit = item.title === "Edit"

                            const handleClick = () =>{
                                if(del){
                                    const check = prompt("Are you sure??","YES")
                                    check === "YES" ? deleteData({title, id:list.id}):null

                                    setTimeout(()=>{
                                        router.reload()
                                    },1000)
                                }else if(edit){
                                    const link = router.asPath.split("/")[1]
                                    const link1 = router.asPath.split("/")[2]
                                    router.push(`/${link}/${link1}/edit/${list.id}`)
                                }else if("login"){
                                    LoginAsUser({data: {email: list.email, password: list.password}, router})
                                }
                            }
                            return(
                                button && 
                                btns[index] === true && 
                                <button key={index} onClick={()=>handleClick()} className={styles[item.color]}>{item.title}</button>
                        )})
                    }
                </div>
            </div>
        )}):
        <p className={styles.noRecord}>There is no record found</p>
    }

    </div>
  );
}
