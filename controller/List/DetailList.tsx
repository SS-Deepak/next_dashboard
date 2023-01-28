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
                          undefined}>

        {data.id?<p >{data.id}</p>:null}
        {data.email?<p >{data.email}</p>:null}
        {data.firstName?<p >{data.firstName}</p>:null}
        {data.lastName?<p >{data.lastName}</p>:null}
        {data.DOJ?<p>{data.DOJ}</p>:null}

        {data.EName?<p>{data.EName}</p>:null}
        {data.ERemark?<p>{data.ERemark}</p>:null}

        {data.holiDate?<p>{data.holiDate}</p>:null}
        {data.holiDay?<p>{data.holiDay}</p>:null}
        {data.holdayTitle?<p>{data.holdayTitle}</p>:null}

        {data.designTitle? <p>{data.designTitle}</p>:null}
        {data.departTitle? <p>{data.departTitle}</p>:null}

        {data.clientDateAdded? <p>{data.clientDateAdded}</p>:null}
        {data.clientName? <p>{data.clientName}</p>:null}
        {data.clientEmail? <p>{data.clientEmail}</p>:null}
        {data.clientPhone? <p>{data.clientPhone}</p>:null}
        {data.clientPhone? <p>{data.clientPhone}</p>:null}
        
        {data.projectDateAdded ? <p>{data.projectDateAdded}</p>:null}
        {data.projectEstimmateDD ? <p>{data.projectEstimmateDD}</p>:null}
        {data.projectName ? <p>{data.projectName}</p>:null}
        {data.projectClient ? <p>{data.projectClient}</p>:null}
        {data.projectStatus ? <p>{data.projectStatus}</p>:null}
        {data.projectDesc ? <p>{data.projectDesc}</p>:null}
        {data.projectCreatedBy ? <p>{data.projectCreatedBy}</p>:null}
        {data.projectAssignTo ? <p>{data.projectAssignTo.join(", ")}</p>:null}


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
  