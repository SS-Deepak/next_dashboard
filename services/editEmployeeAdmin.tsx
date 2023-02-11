export async function edit(id:any, result:any, setStatus:any) {
    
    const response = await fetch(`http://localhost:3000/api/employees/${id}`,{
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