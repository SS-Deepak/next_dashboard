
import { createContext, useContext, useEffect, useState } from "react";
import NavigationPanel from "../../component/Navigation/index"
import Edit from "@/component/employeesEdit/index"
import { employeesData } from "@/Context/editEmployee";
import { fetchSingleEmployee } from "@/services/employeeService";

const EditContext = createContext(employeesData)

export default function componentName() {
  const [data, setData] = useState([])
  const [yes, setYes] = useState(true)

    // fetchSingleEmployee(setData)
    // console.log(data)

  return (
        <EditContext.Provider value={employeesData}>
            <NavigationPanel children={<Edit/>} />
        </EditContext.Provider>
  );
}

export const useEdit = ()=> useContext(EditContext)

