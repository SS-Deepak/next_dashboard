import { useRouter } from "next/router"
import { useEffect } from "react"
import useSWR from "swr"

export const fetchEmployees = ({setBody}:any)=>{
  useEffect(()=>{

    async function  fun(){
      
      const res = await fetch(`${process.env.BASE_PATH}/employees`,{
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
    const url1 = `${process.env.BASE_PATH}/employees/${query.id}`
    const url2 = `${process.env.BASE_PATH}/leaves/${query.id}`

    
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


export const fetchAllReviews = async ({setBody}:any)=>{
  useEffect(()=>{

    async function  fun(){
      
      const res = await fetch(`${process.env.BASE_PATH}/reviews`,{
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
export const fetchReviews = async (setData:any)=>{
  const {query} = useRouter()

  const res = await fetch(`${process.env.BASE_PATH}/reviews/${query.id}`,{
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
})
  const data = await res.json()

  setData(data)
}

export const PaginationCall = async ({page, setBody}:any) =>{
    const call = await fetch(`${process.env.BASE_PATH}/employees?page=${page+1}`,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await call.json()
    setBody(data)
}


export const fetchLeaves = async ({setBody}:any)=>{
  

    async function  fun(){
      
      const res = await fetch(`${process.env.BASE_PATH}/leaves`,{
        headers: {
          "Authorization" :`Bearer ${localStorage.getItem("token")}`
        }
      })
      const responseJSON = await res.json()
      setBody(responseJSON)
    }
  

    useSWR(`${process.env.BASE_PATH}/leaves`,fun)



}
export const fetchHolidayList = async ({setBody,year}:any)=>{
  useEffect(()=>{

    async function  fun(){
      const url = `${process.env.BASE_PATH}/holidays?year=${year}`
      console.log(url,year)
      const res = await fetch(url,{
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

export const fetchYearBasedHoliday = async ({year, setBody}:any)=>{
  const url = `${process.env.BASE_PATH}/holidays?year=${year}`
  const res = await fetch(url,{
    headers: {
      "Authorization" :`Bearer ${localStorage.getItem("token")}`
    }
  })
  const responseJSON = await res.json()
  setBody(responseJSON)
}

export const addReview = async (data:any, id:any)=>{
      const res = await fetch(`${process.env.BASE_PATH}/reviews/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" :`Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
      })
      await res.json()
}