import styles from "../CommonPage/index.module.css"
import {CompensationAllowences,CompensationDeductions} from "./singlePage"
import { CompensationIndexProps } from "@/models/layout"


export default function index({title, page}:CompensationIndexProps) {
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

        <CompensationAllowences title="Allowences"/>
        <CompensationDeductions title="Deductions"/>

    </div>
  )
}
