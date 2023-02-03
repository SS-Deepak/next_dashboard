import styles from "./index.module.css"
import {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import Modal from "@mui/material/Modal"
import {AddHolidayModal} from "../../Modals/Holiday/AddHolidaysModal"
import {EditHoliday} from "../../Modals/Holiday/EditHolidayModal"
import { useRouter } from "next/router"

interface Props{
  title: string,
  page?: string
}

export const LeaveInput = ()=>{
  const refShow:any = useRef()

  const handle = ()=>{
    refShow.current.classList.toggle(`${styles.show}`)
  }
  return(

 
  <div className={styles.leaveInput} onClick={()=>handle()}>
 
    <div className={styles.input}>
      <FontAwesomeIcon icon={faUser}/>
      <input type="text" placeholder="Enter Name"/>
    </div>

    <div className={styles.input}>
      <FontAwesomeIcon icon={faUser} onClick={()=>handle()}/>
      <div className={styles.select} onClick={()=>handle()}>
        <div ref={refShow} className={styles.options} >

          <div className={styles.option}>Pending</div>
          <div className={styles.option}>Approved</div>
          <div className={styles.option}>Rejected</div>
        </div>
      <FontAwesomeIcon icon={faCaretDown}  onClick={()=>handle()}/>
      </div>
    </div>

    <span>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      Search
    </span>
 
  </div>
)
  }

export function TopHeader({title, page}:Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <>
    {
      open ? <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <AddHolidayModal open={handleClose}/>
          </Modal>:

      <div className={styles.employeesSearch}>
        <div className={styles.input}>
          {page==="holiday" ? <Select/> :
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          }
          <input type="text" placeholder="Enter Keyword"/>
        </div>
        <button onClick={handleOpen}>{title}</button>
      </div>
    }
      </>
  )
}

const Select =() =>(
  <div className={styles.holidaySelect}>
    <select name="holidayYear" id="holidayYear" defaultValue="2023">
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
    </select>
  </div>
)