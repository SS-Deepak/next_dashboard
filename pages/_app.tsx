import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { createContext} from 'react'
import Loader from "../component/Loader/index"

const homeContext = createContext({})
export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState("")
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    const local = localStorage.getItem("user") as any
    const data = local !== null && JSON.parse(local).role

    if((router.asPath.includes("login") || router.asPath.includes("register")) && data !== undefined){
      router.push("/")
    }

    if(data === "Employee" && router.asPath.includes("admin")){
      router.push('/nope')
    }
    if(local === null){
      router.push('/login')
    }

    if(data === "Employee"){
      setRole("employee")
    }else{
      setRole("admin")
    }


    return () =>{}
  },[])

  setTimeout(()=>{
    setVisible(true)
  },2000)
  
  return(
    <homeContext.Provider value={{role, setVisible}}>
      {visible?<Component {...pageProps} />:<Loader/>}
    </homeContext.Provider>
    )
}

export const useRole = () => useContext(homeContext)