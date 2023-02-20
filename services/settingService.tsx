import { useEffect } from "react"

export const fetchDetails = async ({setBody}:any) =>{
    useEffect(()=>{

        async function  fun(){
          
          const res = await fetch(`${process.env.BASE_PATH}/settings/global`,{
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

// export const getOfferLetter = async (id:any, link:any) => { 

//   const url = `${process.env.BASE_PATH}/settings/${id}/${link}`
  

//     console.log(url)
//       async function  fun(){
//         const res = await fetch(url,{
//           headers: {
//             "Authorization" :`Bearer ${localStorage.getItem("token")}`
//           }
//         })
//       }
//       fun()
// }


export const SettingsData = async (body:any, setStatus:any)=>{
  // useEffect(()=>{
    async function  fun(){
      
      const res = await fetch(`${process.env.BASE_PATH}/settings`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" :`Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
      })
      const responseJSON = await res.json()

      setStatus(responseJSON.status)
    }
    fun()

    return ()=>{}
  // },[])
}