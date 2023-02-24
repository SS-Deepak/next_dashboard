import { createContext, useContext, useState } from "react";
import NavigationPanel from "../../../../component/Navigation/index"
import Edit from "@/component/employeesEdit/index"

const EditContext = createContext({}) as any

export default function componentName() {
  const [finalData, setFinalData] = useState("") as any

  return (
        <EditContext.Provider value={{finalData, setFinalData}}>
            <NavigationPanel children={<Edit/>} />
        </EditContext.Provider>
  );
}

export const useEdit = ()=> useContext(EditContext)

