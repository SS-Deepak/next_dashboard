import {DetailListProps } from "../interface/List"
import styles from "../styles/list.module.css"


export function DetailList({data}:DetailListProps) {
    return (
      <div className={data.page === "employees" ? styles.employeesListContainer:
                          data.page === "Ereview" ? `${styles.employeesListContainer} ${styles.Ereview}`:
                          data.page === "holiday" ? `${styles.employeesListContainer} ${styles.holiday}`:
                          data.page === "designation" ? `${styles.employeesListContainer} ${styles.designation}`:
                          data.page === "department" ? `${styles.employeesListContainer} ${styles.designation}`:
                          data.page === "status" ? `${styles.employeesListContainer} ${styles.designation}`:
                          data.page === "client" ? `${styles.employeesListContainer} ${styles.client}`:
                          data.page === "project" ? `${styles.employeesListContainer} ${styles.project}`:
                          data.page === "appraisal" ? `${styles.employeesListContainer} ${styles.appraisal}`:
                          undefined}>

        {data.id?<p title="id">{data.id}</p>:null}
        {data.email?<p title="email">{data.email}</p>:null}
        {data.firstName?<p title="firstname">{data.firstName}</p>:null}
        {data.lastName?<p title="lastname">{data.lastName}</p>:null}
        {data.DOJ?<p title="date of joining">{data.DOJ}</p>:null}

        {data.EName?<p title="employeeName">{data.EName}</p>:null}
        {data.ERemark?<p title="EmployeeRemark">{data.ERemark}</p>:null}

        {data.holiDate?<p title="holiday">{data.holiDate}</p>:null}
        {data.holiDay?<p>{data.holiDay}</p>:null}
        {data.holdayTitle?<p>{data.holdayTitle}</p>:null}

        {data.designTitle? <p title="title">{data.designTitle}</p>:null}
        {data.departTitle? <p title="title">{data.departTitle}</p>:null}

        {data.clientDateAdded? <p title="clientDateAdded">{data.clientDateAdded}</p>:null}
        {data.clientName? <p title="name">{data.clientName}</p>:null}
        {data.clientEmail? <p title="email">{data.clientEmail}</p>:null}
        {data.clientPhone? <p title="phoneNo.">{data.clientPhone}</p>:null}
        
        {data.projectDateAdded ? <p title="AddedDate">{data.projectDateAdded}</p>:null}
        {data.projectEstimmateDD ? <p title="estimateDate">{data.projectEstimmateDD}</p>:null}
        {data.projectName ? <p title="title">{data.projectName}</p>:null}
        {data.projectClient ? <p title="client">{data.projectClient}</p>:null}
        {data.projectStatus ? <p title="status">{data.projectStatus}</p>:null}
        {data.projectDesc ? <p title="description">{data.projectDesc}</p>:null}
        {data.projectCreatedBy ? <p>{data.projectCreatedBy}</p>:null}
        {data.projectAssignTo ? <p title="member">{data.projectAssignTo.join(", ")}</p>:null}

        {data.AEName?<p>{data.AEName}</p>:null}
        {data.payday?<p>{data.payday}</p>:null}
        {data.ctc?<p>$ {data.ctc}</p>:null}


        <div className={styles.employeeListLinks}>
          {data.loginBtn?<button className={styles.primary}>Login</button>:null}
          {data.editBtn?<button className={styles.primary}>Edit</button>:null}
          {data.deleteBtn?<button className={styles.danger}>Delete</button>:null}
          {data.detailBtn?<button className={styles.success}>Details</button>:null}
          {data.welcomeMailBtn?<button className={styles.success}>Welcome Mail</button>:null}
          {data.mailEPloginBtn?<button className={styles.success}>Mail EmployeePortal Login</button>:null}
        </div>
      </div>
    )
  }
  