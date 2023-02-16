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
      setBody(responseJSON)
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
      // console.log(leaveJson,"leave", url2)
    } 
  }

}


export const fetchReviews = async (setData:any)=>{
  const {query} = useRouter()

  const res = await fetch(`http://localhost:3000/api/reviews/${query.id}`,{
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
})
  const data = await res.json()

  setData(data)
}




export const PaginationCall = async ({page, setBody}:any) =>{
    const call = await fetch(`http://localhost:3000/api/employees?page=${page+1}`,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await call.json()
    setBody(data)

}