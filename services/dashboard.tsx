import useSWR from "swr"


export const fetchData =({setEmployees, setHolidays}:any)=>{
    
    const fetcher = async(list:string, year?:any)=>{
        let response;
        if(!year){
            response = await fetch(`${process.env.BASE_PATH}/${list}`,{
                headers:{
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
        }else{
            response = await fetch(`${process.env.BASE_PATH}/${list}?year=${String(year)}`,{
                headers:{
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
        }
        const responseJSON = await response.json()
        list === "employees" ?setEmployees(responseJSON.data):setHolidays(responseJSON.data)
    }


    useSWR([`${process.env.BASE_PATH}/employees`],()=>fetcher("employees"))
    useSWR([`${process.env.BASE_PATH}/holidays`],()=>fetcher("holidays",new Date(Date.now()).getFullYear()))
}