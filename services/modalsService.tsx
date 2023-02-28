
export const CalendarFetcher = async({id, year, month, yearCode, data}:any)=>{
    await fetch(`${process.env.BASE_PATH}/attendance/${id}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({data})
        })
}


export const addHolidayFetcher = async({holiday}:any)=>{
    await fetch(`${process.env.BASE_PATH}/holidays`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({date: holiday.date, title: holiday.title})
    })
}
export const addLeave = async({leave}:any)=>{
    await fetch(`${process.env.BASE_PATH}/leaves`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({...leave})
    })
}
export const editHolidayFetcher = async({holiday,id}:any)=>{
    await fetch(`${process.env.BASE_PATH}/holidays/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({...holiday})
    })
}



