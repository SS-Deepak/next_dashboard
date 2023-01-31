import styles from "./index.module.css"
import {TopHeader,LeaveInput} from "../TopHeader/header"
import {
    ListHeader ,
    EmployeeDetailList, 
    ReviewDetailList, 
    HolidayList, 
    DesignationList,
    DepartmentList,
    StatusList,
    ClientList,
    ProjectList,
    AppraisalList,
    LeaveList } from "@/controller/List/index"


interface Props{
    title: string,
    btnTitle?: string,
    page: string
}

export default function index({title, btnTitle, page}:Props) {
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

      <div className={styles.EmployeesList}>
        {page === "leave"? <LeaveInput/>:
        <TopHeader title={btnTitle || ""} page={page}/>
        }

        <ListHeader data={{
            email:true,
            fn: true,
            ls: true,
            doj:true,
            page
          }}
        />
        <div className={styles.checkScroll}>


        {
          page === "employees" ? <EmployeeDetailList/>:
          page === "Ereview" ? <ReviewDetailList/>:
          page === "holiday" ? <HolidayList/>:
          page === "designation" ? <DesignationList/>:
          page === "department" ? <DepartmentList/>:
          page === "status" ? <StatusList/>:
          page === "client" ? <ClientList/>:
          page === "project" ? <ProjectList/>:
          page === "appraisal" ? <AppraisalList/>:
          page === "leave" ? <LeaveList/>:
          null
        }
        </div>
       
    
      </div>

    </div>
  )
}
