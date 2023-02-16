import { fetchLeaves } from "@/services/employee"
import { useState } from "react"
import CommonPage from "../layout/CommonPage/index"
import PaginationPanel from "@/component/layout/CommonPage/CommonPagePagination"

export default function index() {

  // const [leave, setLeave] = useState([]) as any
  // const [paging, setPaging] = useState([]) as any
  // const [status, setStatus] = useState(true)

  // !leave?.data&&fetchLeaves(setLeave)
  // console.log(leave)

  // if(leave.data!==undefined && status){
  //   const data = Object.entries(leave?.data[0])

  //   const filterData= data.filter((item:any)=>{
  //     return(
  //       !["pagingCounter","data","status"].includes(item[0])
  //     )
  //   })
  //   setPaging(Object.fromEntries(filterData))
  //   setStatus(false)
  // }

  return (
    <PaginationPanel
    fetchData={fetchLeaves} 
    title="Leave" 
    header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
    buttons={[
          "rejectBtn",
          "acceptBtn",
        ]}
    
    />
    // <CommonPage 
    //     title="Leave"
      // header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}

    //   body={leave.data}
    //   pagination={paging}
    //   buttons={[
    //     "rejectBtn",
    //     "acceptBtn",
    //   ]} 

    //     />
  )
}
