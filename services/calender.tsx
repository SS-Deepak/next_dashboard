import useSWR from "swr"

export function fetchSingleCalendar({id, currentMonth, currentYear,setHoliday, doj, setData}:any) {
    const fetchAttendance =async ()=>{
        if(id){
            const response =  await fetch(`${process.env.BASE_PATH}/attendance/${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            
        const responseJSON = await response.json()

        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)
        

        }
    }
    useSWR(`${process.env.BASE_PATH}/attendance/${id}` ,fetchAttendance ,{refreshInterval: 0})
}


export function fetchMainCalendar({currentMonth, currentYear, setHoliday, setData}:any){
    const fetchAttendance =async ()=>{
        const response = await fetch(`${process.env.BASE_PATH}/attendance`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()
        setHoliday(responseJSON.holiday)
        setData(responseJSON)
    }
    useSWR(`${process.env.BASE_PATH}/attendance` ,fetchAttendance )

}


export function addAttendance (date:any, check:any){
    const fetchAttendance =async ()=>{
        await fetch(`${process.env.BASE_PATH}/attendance`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({check, date})
        })
    }
    fetchAttendance()
}


export function fetchEmployeeCalendar({setHoliday, setData}:any) {
    const fetchAttendance =async ()=>{
      
        const response =  await fetch(`${process.env.BASE_PATH}/attendance/single`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            
        const responseJSON = await response.json()

        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)

    }
    useSWR(`${process.env.BASE_PATH}/attendance/single` ,fetchAttendance ,{refreshInterval: 0})
}