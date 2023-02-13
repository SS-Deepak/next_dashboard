import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useContext, useEffect, useState } from 'react'
import { createContext, useCallback } from 'react'

const homeContext = createContext("")
export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState("")

  useEffect(()=>{
    const roleToken = document.cookie.split(" ")
    const yes = roleToken.some((data:any)=>(
      data.includes("admin")
    ))
    !yes ? setRole("admin") : setRole("employee")
    
  })

  return(
    <homeContext.Provider value={role}>
      <Component {...pageProps} />
    </homeContext.Provider>
    )
}

export const useRole = () => useContext(homeContext)