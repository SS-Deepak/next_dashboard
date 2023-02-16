export const fetchHolidayList = async ({setBody}:any)=>{
    const data = await fetch("http://localhost:3000/api/holidays",{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const dataJSON =  await data.json()
    setBody(dataJSON)
}


