import styles from "./index.module.css"
import {TopHeader} from "../TopHeader/header"

import BodyList from "./bodyList"
import HeaderList from "@/controller/headerList/List"


interface Props{
    title: string,
    btnTitle?: string,
    page: string,
    header: string[],
    body:any,
    buttons?: any
}




export default function index({title, btnTitle, page, header, body, buttons}:Props) {
  
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

      <div className={styles.EmployeesList}>
        {page === "leave"? null:
          <TopHeader title={btnTitle || ""} page={page}/>
        }

        <HeaderList data={[...header]}/>

        <div className={styles.checkScroll}>
          <BodyList body={body} button={buttons} />
        </div>
      </div>
    </div>
  )
}
