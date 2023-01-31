import styles from "../CommonPage/index.module.css"
import {CompensationAllowences,CompensationDeductions} from "./singlePage"

interface Props{
    title: string,
    btnTitle?: string,
    page: string
}

export default function index({title, page}:Props) {
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

        <CompensationAllowences title="Allowences"/>
        <CompensationDeductions title="Deductions"/>

    </div>
  )
}
