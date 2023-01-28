import {useRef} from 'react';
import {useToggle} from "../../Context/headerToggle"
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faHome,
  faUser,
  faCalendarXmark,
  faPeopleGroup,
  faCalendarDays,
  faCircleArrowUp,
  faHandPeace,
  faCalendarCheck,
  faGauge,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

interface Props{
  icon: IconDefinition,
  title: string
}

const Row = ({icon, title}:Props)=>(
  <li>
    <FontAwesomeIcon icon={icon} />
    <p>{title}</p>
    <span>{title}</span>
  </li>
);


export default function index() {
  const {show,loading} = useToggle();
  const hide = `${styles.sidePanelContainer} ${styles.hide}`
  const router = useRouter();
  const showList = useRef<any>(null)

  const handleList = ()=>{
    const span = showList.current; 
    span?.classList.toggle(`${styles.hidden}`)
  }
  
  return (
    <div className={show?styles.sidePanelContainer: hide}>
     
        <div className={styles.companyLogo}>
          { show ? <><span>Admin</span><p>RS</p></> :  "RS" }
        </div>

        <div className={styles.panelData}>
          <ul>
            <Row icon={faHome} title="DashBoard"/>
            <Row icon={faPeopleGroup} title="Employees"/>
            <Row icon={faCalendarDays} title="Attendence"/>
            <Row icon={faCalendarXmark} title="Leave"/>
            <Row icon={faCircleArrowUp} title="Appraisal"/>
            <Row icon={faHandPeace} title="Reviews"/>
            <Row icon={faCalendarCheck} title="Holidays"/>
            <Row icon={faUser} title="Admins"/>

            <div className={styles.select} ref={showList} onClick={handleList}>
              <div className={styles.selectVisible}>
                <Row icon={faGauge} title="Masters"/>
                <FontAwesomeIcon icon={faCaretDown}/>
              </div>

              <ul className={styles.selectHidden}>
                <li>System</li>
                <li>Setting</li>
                <li>Compensation</li>
                <li>Designation</li>
                <li>Departments</li>
                <li>Status</li>
                <li>Clients</li>
                <li>Projects</li>
                <li>Timesheet</li>
              </ul>
            </div>
          </ul>
          
        </div>
    </div>
  )
}
