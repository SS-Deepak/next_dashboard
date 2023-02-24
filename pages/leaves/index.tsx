import { GeneralPage } from "@/component/layout/GeneralBody"
import { fetchSingleEmployee } from "@/services/employeeService" 
import {useState} from "react"
import NavigationPanel from "@/component/Navigation/index"

export default function componentName() {
    // const {leave} = useDetails()
    const [personal, setPersonal] = useState([]) as any
    const [leave, setLeave] = useState([]) as any
  
    if(!Boolean(personal.email)){
      fetchSingleEmployee(setPersonal, setLeave)
    }
    console.log(leave)
    return( 
        <NavigationPanel>
            <GeneralPage 
                btnTitle="Search"
                header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
                data={leave}
                page="leaves"
            />
        </NavigationPanel>
      )
}
