import { GeneralPage } from "@/component/layout/GeneralBody"
import { fetchSingleEmployeeLeaves } from "@/services/employeeService" 
import {useState} from "react"
import NavigationPanel from "@/component/Navigation/index"
import { Make_A_Leave } from "@/component/Modals/Leave/index.module"

export default function componentName() {
    const [leave, setLeave] = useState("") as any
  
    fetchSingleEmployeeLeaves( setLeave)

    return( 
        <NavigationPanel>
            <GeneralPage 
                btnTitle="Take Leave"
                header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
                data={leave}
                page="leaves"
                modal={Make_A_Leave}
            />
        </NavigationPanel>
      )
}
