import {useRef, useState} from 'react';
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
import { useRole } from '@/pages/_app';


interface Props{
  icon: IconDefinition,
  title: string,
  path?: string
}




export default function index() {
  const {show,setShow,loading} = useToggle();
  const {role, setVisible} = useRole() as any

  const router = useRouter();

  const hide = `${styles.sidePanelContainer} ${styles.hide}`
  const showList = useRef<any>(null)

  const handleList = ()=>{
    const span = showList.current; 
    span?.classList.toggle(`${styles.hidden}`)
  }
  const handleClick = (path:string|undefined)=>{
    if(path){
      setVisible(false)
      router.push(path)
      setTimeout(()=>{
        setVisible(true)
      },1500)
    }
  }
  const Row = ({icon, title, path}:Props)=>(
    <li onClick={()=>handleClick(path)}>
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
      { title !== "Masters"?<span>{title}</span>: null}
    </li>
  );

    const handleRoute = (path:string) =>{
      setVisible(false)
      setTimeout(()=>{
        setVisible(true)
        router.push(path)
      },1500)
    }

  const AdminPanel = () =>(
    <ul>
      <Row icon={faHome} title="DashBoard" path='/'/>
      <Row icon={faPeopleGroup} title="Employees" path='/admin/employees'/>
      <Row icon={faCalendarDays} title="Attendence" path='/admin/calendar'/>
      <Row icon={faCalendarXmark} title="Leave" path='/admin/leave'/>
      <Row icon={faCircleArrowUp} title="Appraisal"/>
      <Row icon={faHandPeace} title="Reviews" path='/admin/employee_review'/>
      <Row icon={faCalendarCheck} title="Holidays" path='/admin/holiday'/>
      <Row icon={faUser} title="Admins"/>

      <div className={styles.select} ref={showList} >
        <div className={styles.selectVisible} onClick={handleList}>
          <Row icon={faGauge} title="Masters"/>
          <FontAwesomeIcon icon={faCaretDown}/>
        </div>

        <ul className={styles.selectHidden}>
          <li>System</li>
          <li onClick={()=>handleRoute("/admin/settings")}>Setting</li>
          <li onClick={()=>handleRoute("/admin/compensation")}>Compensation</li>
          <li onClick={()=>handleRoute("/admin/designations")}>Designation</li>
          <li onClick={()=>handleRoute("/admin/departments")}>Departments</li>
          <li onClick={()=>handleRoute("/admin/status")}>Status</li>
          <li onClick={()=>handleRoute("/admin/clients")}>Clients</li>
          <li onClick={()=>handleRoute("/admin/projects")}>Projects</li>
          <li>Timesheet</li>
        </ul>
      </div>
    </ul>
  )

  const EmployeePanel = () =>(
    <div className={styles.select} ref={showList} >
        <div className={styles.selectVisible} onClick={handleList}>
          <Row icon={faGauge} title="Masters"/>
          <FontAwesomeIcon icon={faCaretDown}/>
        </div>

        <ul className={styles.selectHidden}>
          
          <li onClick={()=>router.push("/")}>Dashboard</li>
          <li onClick={()=>router.push("/attendance")}>Attendance</li>
          <li onClick={()=>router.push("/admin/leave")}>Leaves</li>
          <li onClick={()=>router.push("/admin/holiday")}>Holidays</li>
          <li onClick={()=>router.push("/admin/clients")}>Clients</li>
          <li onClick={()=>router.push("/edit")}>Profile</li>
        </ul>
      </div>
  )

  return (
    <div className={show?styles.sidePanelContainer: hide}>
     
        <div className={styles.companyLogo}>
          { show ? <><span>Admin</span><p>RS</p></> :  "RS" }
        </div>

        <div className={styles.panelData}>
          {
            role === "admin" ? 
            <AdminPanel/> 
            : <EmployeePanel/>
          }
          
        </div>
    </div>
  )
}



