import NavigationPanel from "@/component/Navigation/index"
import EmployeeDetails from "@/component/Employees/detail/index"
import { createContext, useContext, useEffect, useState } from "react";
import { fetchSingleEmployee } from "@/services/employee";


const detailContext = createContext({}) 

export default function componentName() {
  const [personal, setPersonal] = useState()
  const [leave, setLeave] = useState()

  
  fetchSingleEmployee(setPersonal, setLeave)

  return (
    <detailContext.Provider value={{personal,leave}}>
      <NavigationPanel children={<EmployeeDetails/>} />
    </detailContext.Provider>
  );
}

export const useDetails = ()=>useContext(detailContext) as any

