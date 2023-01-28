import styles from "./index.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

interface Props{
  title: string,
  page?: string
}

export function TopHeader({title, page}:Props) {
  return (
    <div className={styles.employeesSearch}>
    <div className={styles.input}>
      {page==="holiday" ? <Select/> :
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      }
      <input type="text" placeholder="Enter Keryword"/>
    </div>
    <button>{title}</button>
  </div>
  )
}

const Select =() =>(
  <div className={styles.holidaySelect}>
    <select name="holidayYear" id="holidayYear">
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023" selected>2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
    </select>
  </div>
)