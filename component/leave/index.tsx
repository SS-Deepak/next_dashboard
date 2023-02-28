import { fetchLeaves } from "@/services/employeeService"
import PaginationPanel from "@/component/layout/CommonPage/CommonPagePagination"

export default function index() {
  
  return (
    <PaginationPanel
      searchType="name"
      fetchData={fetchLeaves} 
      title="Leaves" 
      header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
      buttons={[
            "rejectBtn",
            "acceptBtn",
        ]}
    
    />
  )
}
