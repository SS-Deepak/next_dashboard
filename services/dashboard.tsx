import useSWR from "swr"


export const fetchData =({setEmployees, setHolidays}:any)=>{
    const fetcher = async(list:string)=>{
        const response = await fetch(`http://localhost:3000/api/${list}`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        const responseJSON = await response.json()
        list === "employees" ?setEmployees(responseJSON.data):setHolidays(responseJSON.data)
    }


    useSWR(["http://localhost:3000/api/employees"],()=>fetcher("employees"))
    useSWR(["http://localhost:3000/api/holidays"],()=>fetcher("holidays"))
}