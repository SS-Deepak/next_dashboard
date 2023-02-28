import Image from "next/image"
import LogoutImage from "../../assets/Images/logout.jpg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useToggle} from "../../Context/headerToggle"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useRole } from "@/pages/_app"

export default function index() {
  const {show, setShow} = useToggle()
  const [name, setName] = useState("")
  const router = useRouter()
  const {setVisible} = useRole() as any

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

  const handleUser = () => {

    if(localStorage.getItem("userToken")){
      localStorage.removeItem("userToken")
      localStorage.removeItem("guestUser")
      
      setVisible(false)
      router.push('/')
      // router.reload()
      setTimeout(()=>{
        setVisible(true)
      },1000)
    }
  }

  return (
    <div className={styles.headerContainer}>
      
      <div className={styles.headerMenu} onClick={()=>setShow(!show)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={styles.headerLink} onClick={()=>handleUser()}>
        <Image src={LogoutImage} alt="logout" height={25} width={25}/>
        <p>{name}</p>
      </div>
      
    </div>
  )
}

