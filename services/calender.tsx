import useSWR from "swr"

export function fetchSingleCalendar({id, currentMonth, currentYear,setHoliday, doj, setData}:any) {
    const fetchAttendance =async ()=>{
        const yes = (id && currentMonth && currentYear)
        if(yes){
            
            const response =  await fetch(`http://localhost:3000/api/attendance/${id}?year=${currentYear}&month=${currentMonth-1}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        const responseJSON = await response.json()
        doj(responseJSON.doj)

        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)
        }
    }
    useSWR(`http://localhost:3000/api/attendance/${id}?year=${currentYear}&month=${currentMonth-1}` ,fetchAttendance ,{refreshInterval: 0})
}


export function fetchMainCalendar({currentMonth, currentYear, setHoliday, setData}:any){
    const fetchAttendance =async ()=>{
        const response = await fetch(`http://localhost:3000/api/attendance?year=${currentYear}&month=${currentMonth-1}`,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()
        setHoliday(responseJSON.holiday)
        setData(responseJSON.data)
    }
    useSWR(`http://localhost:3000/api/attendance?year=${currentYear}&month=${currentMonth-1}` ,fetchAttendance )

}