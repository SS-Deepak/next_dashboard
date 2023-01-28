import Image from "next/image"
import LogoutImage from "../../assets/Images/logout.jpg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useToggle} from "../../Context/headerToggle"
import styles from "./index.module.css"

export default function index() {
  const {show, setShow} = useToggle()

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerMenu} onClick={()=>setShow(!show)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={styles.headerLink}>
        <Image src={LogoutImage} alt="logout" height={25} width={25}/>
        <p>Pawan</p>
      </div>
    </div>
  )
}
