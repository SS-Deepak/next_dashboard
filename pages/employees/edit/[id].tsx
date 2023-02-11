import { createContext, useContext } from "react";
import NavigationPanel from "../../../component/Navigation/index"
import Edit from "@/component/employeesEdit/index"
import { employeesData } from "@/Context/editEmployee";

const EditContext = createContext(employeesData)

export default function componentName() {
  return (
        <EditContext.Provider value={employeesData}>
            <NavigationPanel children={<Edit/>} />
        </EditContext.Provider>
  );
}

export const useEdit = ()=> useContext(EditContext)

