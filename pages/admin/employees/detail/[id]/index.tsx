import NavigationPanel from "@/component/Navigation/index"
import EmployeeDetails from "@/component/Employees/detail/index"
import { createContext, useContext } from "react";



const detailContext = createContext({}) 

export default function componentName({personal, leave}:any) {
  return (
    <detailContext.Provider value={{personal,leave}}>
      <NavigationPanel children={<EmployeeDetails/>} />
    </detailContext.Provider>
  );
}

export const useDetails = ()=>useContext(detailContext) as any


export const getServerSideProps = async (context:any)=>{
  const {query} = context

  const response = await fetch(`http://localhost:3000/api/employees/${query.id&&query.id}`)
  const leavesResponse = await fetch(`http://localhost:3000/api/leaves/${query.id&&query.id}`)
  const resJson = await response.json()
  const leaveJson = await leavesResponse.json()

  return {
    props:{
      personal: resJson.data,
      leave: leaveJson.data !== undefined && leaveJson.data 
    }
  }
}