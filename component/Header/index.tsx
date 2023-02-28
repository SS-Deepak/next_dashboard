import Image from "next/image"
import LogoutImage from "../../assets/Images/logout.jpg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useToggle} from "../../Context/headerToggle"
import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { useRole } from "@/pages/_app"

export default function index() {
  const {show, setShow} = useToggle()
  const [name, setName] = useState("")
  const router = useRouter()
  const {setVisible} = useRole() as any
  const headerDropDown = useRef() as any

  useEffect(()=>{
    if(localStorage.getItem("guestUser")){
      const user = localStorage.getItem("guestUser") as any
      if(user){

        const data = JSON.parse(user).name
        data && setName(data)
      }
    }else{
      const user = localStorage.getItem("user") as any
      if(user){
        const data = JSON.parse(user).name
        data && setName(data)
      }
    }
  })

  const handleLogout = () => {

      localStorage.removeItem("userToken")
      localStorage.removeItem("guestUser")
      
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      
      setVisible(false)
      router.push('/login')
      setTimeout(()=>{
        setVisible(true)
      },1000)
  }

  const handleDropDown=()=>{
    headerDropDown.current.classList.toggle(`${styles.show}`)
  }


  return (
    <>
    <div className={styles.headerContainer}>
      
      <div className={styles.headerMenu} onClick={()=>setShow(!show)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>

      <div className={styles.headerLink} onClick={()=>handleDropDown()}>
        <Image src={LogoutImage} alt="logout" height={25} width={25}/>
        <p>{name}</p>
      </div>
      
    </div>

    <div className={styles.headerdropdown} ref={headerDropDown}>
      <ul>
        <li onClick={()=>router.push("/login")}>Login</li>
        <li onClick={()=>router.push("/register")}>Register</li>
        <hr />
        <li className={styles.logout}  onClick={()=>handleLogout()}>Logout</li>
      </ul>
    </div>
    </>
  )
}

