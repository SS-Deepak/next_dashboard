import NavigationPanel from "@/component/Navigation/index"
import EmployeeDetails from "@/component/Employees/detail/index"
import { createContext, useContext } from "react";



const detailContext = createContext({}) 

export default function componentName({personal}:any) {
  return (
    <detailContext.Provider value={personal}>
      <NavigationPanel children={<EmployeeDetails/>} />
    </detailContext.Provider>
  );
}

export const useDetails = ()=>useContext(detailContext) as any


export const getServerSideProps = async (context:any)=>{
  const {query} = context

  const response = await fetch(`http://localhost:3000/api/employees/${query.id&&query.id}`)
  const resJson = await response.json()

  return {
    props:{
      personal: resJson.data
    }
  }
}