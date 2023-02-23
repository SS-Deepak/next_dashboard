import NavigationPanel from "@/component/Navigation/index"
import EmployeeDetails from "@/component/Employees/detail/index"
import { createContext, useContext, useEffect, useState } from "react";
import { fetchSingleEmployee } from "@/services/employee";
import { useRouter } from "next/router";


const detailContext = createContext({}) 

export default function componentName() {
  const [personal, setPersonal] = useState([]) as any
  const [leave, setLeave] = useState([]) as any

  const {query} = useRouter()


  // if(!Boolean(personal.email)){

    fetchSingleEmployee(query,setPersonal,personal, setLeave)
  // }
  

  return (
    <detailContext.Provider value={{personal,leave}}>
      <NavigationPanel children={<EmployeeDetails/>} />
    </detailContext.Provider>
  );
}

export const useDetails = ()=>useContext(detailContext) as any

