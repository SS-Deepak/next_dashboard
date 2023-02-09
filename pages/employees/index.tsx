import NavigationPanel from "../../component/Navigation/index"
import Employees from "../../component/Employees/index"
import { createContext, useContext } from "react";

const empDataContext = createContext({})
export default function Home({data}:any) {
  return (
    <empDataContext.Provider value={data}>
      <NavigationPanel children={<Employees/>} />
    </empDataContext.Provider>
  )
}
export const useEmpList = ()=>useContext(empDataContext)


export const getServerSideProps = async (context:any)=>{

  const response = await fetch(`http://localhost:3000/api/employees`)
  const resJson = await response.json()

  return {
    props:{
      data: resJson.data
    }
  }
}