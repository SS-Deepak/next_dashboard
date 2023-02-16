import styles from "../CommonPage/index.module.css"
import {TopHeader} from "../TopHeader/header"
import BodyList from "../CommonPage/bodyList"
import HeaderList from "@/controller/headerList/List"
import { useState } from "react"
import {  TabsHeader,TabsBody } from "./components"
import { GeneralBodyProps } from "@/models/layout"
import Pagination from "../Pagination/index"

export function GeneralPage({btnTitle, searchType, page, header,data, buttons, modal, deleteModal,title,pagination}:GeneralBodyProps) {
    const [search, setSearch] = useState("")

  return (
    <div className={styles.EmployeesList}>
    {page === "leave"? null:
      <TopHeader setSearch={setSearch} ModalPopUp={modal} title={btnTitle || ""}/>
    }

    <HeaderList data={header&&[...header]}/>

    <div className={styles.checkScroll}>
      <BodyList search={search} searchType={searchType} title={title} dataBody={data} button={buttons} deletePopUp={deleteModal}/>
    </div>

    {pagination && <Pagination pagination={pagination}/>}
  </div>
  );
}

export const DetailsPage = ({modal}:any) => {
  
  const [tabIndex, setTabIndex] = useState<number>(0)
  return (
    <div className={styles.mainTabsContainer}>
      <TabsHeader setTabIndex={setTabIndex}/>
      <TabsBody tabIndex={tabIndex} modal={modal}/>      
    </div>
  )
}

