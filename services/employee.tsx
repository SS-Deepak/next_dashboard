import { useEffect } from "react"

export const fetchEmployees = ({setBody}:any)=>{
    useEffect(()=>{
        const callFunction = async ()=>{
          const res = await fetch("http://localhost:3000/api/employees")
          const responseJSON = await res.json()
          setBody(responseJSON.data)
        }
        callFunction()
        return ()=>{}
    },[])
}