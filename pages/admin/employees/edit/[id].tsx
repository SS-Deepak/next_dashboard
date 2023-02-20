import { createContext, useContext, useEffect, useState } from "react";
import NavigationPanel from "../../../../component/Navigation/index"
import Edit from "@/component/employeesEdit/index"
import { employeesData } from "@/Context/editEmployee";
import { fetchSingleEmployee } from "@/services/employee";

const EditContext = createContext({}) as any

export default function componentName() {
  const [finalData, setFinalData] = useState() as any
  const [yes, setYes] = useState(true)

  console.log(finalData)
    // fetchSingleEmployee(setData)
    // console.log(data)

  return (
        <EditContext.Provider value={{finalData, setFinalData}}>
            <NavigationPanel children={<Edit/>} />
        </EditContext.Provider>
  );
}

export const useEdit = ()=> useContext(EditContext)

