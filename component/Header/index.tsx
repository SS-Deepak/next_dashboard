import Image from "next/image"
import LogoutImage from "../../assets/Images/logout.jpg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useToggle} from "../../Context/headerToggle"
import styles from "./index.module.css"
import { useEffect, useState } from "react"

export default function index() {
  const {show, setShow} = useToggle()
  const [name, setName] = useState("")

  useEffect(()=>{
    const user = localStorage.getItem("user") as any
    setName(JSON.parse(user).name)
  })

  return (
    <div className={styles.headerContainer}>
      
      <div className={styles.headerMenu} onClick={()=>setShow(!show)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={styles.headerLink}>
        <Image src={LogoutImage} alt="logout" height={25} width={25}/>
        <p>{name}</p>
      </div>
    </div>
  )
}

