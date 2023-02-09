
export const CalendarFetcher = async({id, year, month, yearCode, data}:any)=>{
    await fetch(`http://localhost:3000/api/attendance/${id}?year=${year}&month=${month}&yearCode=${yearCode}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data})
        })
}


export const addHolidayFetcher = async({holiday}:any)=>{
    await fetch("http://localhost:3000/api/holidays",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({date: holiday.date, title: holiday.title})
    })
}
export const editHolidayFetcher = async({holiday,id}:any)=>{
    await fetch(`http://localhost:3000/api/holidays/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({...holiday})
    })
}

