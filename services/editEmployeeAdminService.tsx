export async function edit(id:any, result:any, setStatus:any) {
    
    const response = await fetch(`${process.env.BASE_PATH}/employees/${id}`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(result)
    })
    
    const responseJSON = await response.json()
    setStatus(responseJSON.status)
 }




 export const LeaveStatus = async ({id, status}:any) =>{
    await fetch(`${process.env.BASE_PATH}/leaves/${id}`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({status})
    })
    
 }