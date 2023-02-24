import NavigationPanel from "../../../component/Navigation/index"
import Employees from "../../../component/Employees/index"
import { createContext, useContext, useEffect, useState } from "react";
import { Login } from "@/services/authService";
import {Check} from "@/services/redirectService"

const empDataContext = createContext({})
export default function Home() {
const[data, setData] = useState([])

  useEffect(()=>{
    const fun =async () =>{
      const res = await Login() as any
      setData(res.data)
    }
    fun()

    return ()=>{}
  },[])

  
  return (
    <empDataContext.Provider value={data}>
      <NavigationPanel children={<Employees/>} />
    </empDataContext.Provider>
  )
}
export const useEmpList = ()=>useContext(empDataContext)

//redirect
export const getServerSideProps = (context:any) => {
  Check(context)
  return{
    props:{}
  }
}