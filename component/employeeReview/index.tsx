import PaginatePanel from "../layout/CommonPage/CommonPagePagination"
import { fetchAllReviews } from "@/services/employee"

export default function index() {
  return (
    <PaginatePanel 
      fetchData={fetchAllReviews}
      title="Employee Reviews" 
      btnTitle="Add New Employee Review" 
      header={["hashIndex","en", "remark"]}
    />
  )
}
