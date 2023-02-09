import Calendar from  "../../controller/calender/singleCalendar"
import NavigationPanel from "@/component/Navigation/index"
import styles from "@/component/layout/CommonPage/index.module.css"
import style from "../../controller/styles/calendar.module.css"
import Modal from "@mui/material/Modal"
import {useState} from "react"
import Holiday from "../../component/Modals/AddAttendance/add"

export default function index() {
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
  return (
    <NavigationPanel>
      <div className={styles.EmployeeContainer}>
      <h2>Attendence</h2>
      <div className={`${styles.EmployeesList} ${styles.compensation}`}>
        {
          openModal ?<Modal
                  open={openModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Holiday open={handleClose}/>
            </Modal>:
            <div className={styles.upperHeader}>
              <h3></h3>  
              <p onClick={handleOpen}>Add New Attendence</p>    
            </div>
        }
        <div className={style.singleCalender}>
            <Calendar/>
        </div>
      </div>
      </div>
    </NavigationPanel>
  )
}
