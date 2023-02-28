
import { createContext, useContext, useEffect, useState } from "react";
import NavigationPanel from "../../component/Navigation/index"
import Edit from "@/component/employeesEdit/index"

const EditContext = createContext({})

export default function componentName() {
  const [finalData, setFinalData] = useState("") as any


  return (
        <EditContext.Provider value={{finalData, setFinalData}}>
            <NavigationPanel children={<Edit emp={true}/>} />
        </EditContext.Provider>
  );
}

export const useEmployeeEdit = ()=> useContext(EditContext)

