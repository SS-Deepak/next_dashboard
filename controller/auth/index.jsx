import { useRouter } from 'next/router'
import { createContext,  useContext, useEffect, useState } from 'react'

const authContext = createContext()

export default function componentName({children}) {
    const [auth, setAuth] = useState(false)
    const router = useRouter()

    useEffect(()=>{
      const res = localStorage.getItem("token")
      setAuth(Boolean(res) ?res:"")
    },[])
    
    useEffect(()=>{
        if(!auth){
            router.push("/login")
            return;
        }
        return ()=>{}

    },[auth])
  return (
    <authContext value={{token:auth}}>
        {children}
    </authContext>
  );
}
export const useAuth = ()=> useContext(authContext)