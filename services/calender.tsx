import useSWR from "swr"

export function fetchSingleCalendar({id, currentMonth, currentYear,setHoliday, doj, setData}:any) {
    const fetchAttendance =async ()=>{
        if(id){
            const response =  await fetch(`http://localhost:3000/api/attendance/${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            
        const responseJSON = await response.json()

        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)
        

        }
    }
    useSWR(`http://localhost:3000/api/attendance/${id}` ,fetchAttendance ,{refreshInterval: 0})
}


export function fetchMainCalendar({currentMonth, currentYear, setHoliday, setData}:any){
    const fetchAttendance =async ()=>{
        const response = await fetch(`http://localhost:3000/api/attendance`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()
        setHoliday(responseJSON.holiday)
        setData(responseJSON)
    }
    useSWR(`http://localhost:3000/api/attendance` ,fetchAttendance )

}


export function addAttendance (date:any, check:any){
    const fetchAttendance =async ()=>{
        await fetch(`http://localhost:3000/api/attendance`,{
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
      
        const response =  await fetch(`http://localhost:3000/api/attendance/single`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            
        const responseJSON = await response.json()

        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)

    }
    useSWR(`http://localhost:3000/api/attendance/single` ,fetchAttendance ,{refreshInterval: 0})
}