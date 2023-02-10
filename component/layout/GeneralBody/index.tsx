import styles from "../CommonPage/index.module.css"
import {TopHeader} from "../TopHeader/header"
import BodyList from "../CommonPage/bodyList"
import HeaderList from "@/controller/headerList/List"
import { useState } from "react"
import {
  TabsHeader,TabsBody
} from "./components"
import { useEmpList } from "@/pages/employees"

interface Props{
    btnTitle?: string,
    page?: string,
    header?: string[] | any,
    data?:any,
    buttons?: any,
    modal?: any,
    deleteModal?: any,
    title?: any
}


export function GeneralPage({btnTitle, page, header,data, buttons, modal, deleteModal,title}:Props) {
  const body = useEmpList()
  return (
    <div className={styles.EmployeesList}>
    {page === "leave"? null:
      <TopHeader ModalPopUp={modal} title={btnTitle || ""}/>
    }

    <HeaderList data={header&&[...header]}/>

    <div className={styles.checkScroll}>
      <BodyList title={title} page={page} body={data?data:body} button={buttons} deletePopUp={deleteModal}/>
    </div>
  </div>
  );
}

export const DetailsPage = () => {

  const [tabIndex, setTabIndex] = useState<number>(0)
  return (
    <div className={styles.mainTabsContainer}>
      <TabsHeader setTabIndex={setTabIndex}/>
      <TabsBody tabIndex={tabIndex}/>      
    </div>
  )
}

