import { useEffect } from "react"

export const fetchEmployees = ({setBody}:any)=>{
  useEffect(()=>{

    async function  fun(){
      
      const res = await fetch("http://localhost:3000/api/employees",{
        headers: {
          "Authorization" :`Bearer ${localStorage.getItem("token")}`
        }
      })
      const responseJSON = await res.json()
      setBody(responseJSON.data)
    }
    fun()

    return ()=>{}
  },[])
      
}