import CommonPage from "../layout/CommonPage/index"
import { fetchEmployees , fetchAdmins} from "@/services/employeeService"
import { useState } from "react";
import AddAdmin from "@/component/Modals/Employee/addAdmin"

export default function componentName() {
  const [data, setBody] = useState() as any

  
  fetchAdmins({setBody})

  return (
    <CommonPage 
    searchType="email"
    body={data !== undefined && data.data} 
    modal={AddAdmin} 
    title="Admins" 
    btnTitle="Change Role" 
    header={["hashIndex","emp_email", "date", "btns"]}
    />
  );
}
