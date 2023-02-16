export const fetchHolidayList = async ({setBody}:any)=>{
    const data = await fetch(`${process.env.BASE_PATH}/holidays`,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const dataJSON =  await data.json()
    setBody(dataJSON)
}


