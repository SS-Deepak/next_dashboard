import { useRouter } from "next/router"
import { useEffect } from "react"
import useSWR from "swr"

export const fetchAdmins = ({setBody}:any)=>{
  useEffect(()=>{
console.log("admin")
    async function  fun(){
      
      const res = await fetch(`${process.env.BASE_PATH}/employees/admin`,{
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
export const changeRole = ({user, token, setStatus}:any)=>{

    async function  fun(){
      
      const response = await fetch(`${process.env.BASE_PATH}/employees/change_role`, {
        method: 'POST', // make sure the method is set to POST
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(user) // send the secret as payload in the body
      })
      const data = await response.json()
      setStatus(data.code)
    }
    fun()

}
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



export const fetchSingleEmployee = async (query?:any, setPersonal?:any,personal?:any, setLeave?:any)=>{

async function  call(){

  if(query.id  ){
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
    } 
  }
  else{
    const url2 = `${process.env.BASE_PATH}/leaves/single`

    if(setLeave){
      const leavesResponse = await fetch(url2,{
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
        }
      })
      const leaveJson = await leavesResponse.json()
      leaveJson.data !== undefined ? setLeave( leaveJson.data ) : setLeave([])
    } 
  }
}

if(query.id && !Boolean(personal.status)){
  call()
}

useEffect(()=>{
  // return () => {}
})

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

export const settingEmployee = async (body:any, setStatus:any, id:any)=>{
  // useEffect(()=>{
    async function  fun(){
      const res = await fetch(`${process.env.BASE_PATH}/employees/${id.id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" :`Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body.data)
      })
      const responseJSON = await res.json()

      setStatus(responseJSON.status)
    }
    fun()

    return ()=>{}
  // },[])
}

export const fetchDetails = async ({setBody,id,status, setStatus}:any) =>{
  // useEffect(()=>{
    async function  fun(){
      
        const res = await fetch(`${process.env.BASE_PATH}/employees/${id}`,{
          headers: {
            "Authorization" :`Bearer ${localStorage.getItem("token")}`
          }
        })
        const responseJSON = await res.json()
        setBody(responseJSON.data)


        if(responseJSON.status === false){
          setStatus(true)
        }else{
          setStatus(false)
        }
      }
      if(status){
        fun()
      }
      
  
      // return ()=>{}
    // },[])
}




export const exportMultipleDocs = async ({form_data}:any)=>{
  try{
    const res = await fetch(`${process.env.BASE_PATH}/files/multi`,{
        method: 'POST',
        headers:{
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: form_data
      },
    )

    return await res.json()

  }catch(error){
    console.log("error", error)
  }
}

export const exportDocs = async ({form_data}:any)=>{
  try{
    const res = await fetch(`${process.env.BASE_PATH}/files`,{
        method: 'POST',
        headers:{
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: form_data
      },
    )

    return await res.json()

  }catch(error){
    console.log("error", error)
  }
}

export const updateProfile = async(id:any)=>{
  try{
    const data = await fetch(process.env.BASE_PATH+"/employees/profile",{
      method: 'POST',
      headers:{
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({id})
    },
    )
    const dataJSON = await data.json()
    
    return {dataJSON,code:data.status}
  }catch (error){
    console.log(error)
  }
}

