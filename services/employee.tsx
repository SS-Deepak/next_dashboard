import { useRouter } from "next/router"
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



export const fetchSingleEmployee = async (setPersonal:any, setLeave?:any)=>{
  const {query} = useRouter()
  if(query.id){
  const url1 = `http://localhost:3000/api/employees/${query.id}`
  const url2 = `http://localhost:3000/api/leaves/${query.id}`
  
  const response = await fetch(url1,{
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
  })
  
  const resJson = await response.json()
  
  
  resJson.data !== undefined ? setPersonal( resJson.data ) : setPersonal([])
  
  if(setLeave){
    const leavesResponse = await fetch(url2,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const leaveJson = await leavesResponse.json()
    leaveJson.data !== undefined ? setLeave( leaveJson.data ) : setLeave([])

  }
}

}