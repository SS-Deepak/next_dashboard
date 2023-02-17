import PaginatePanel from "../layout/CommonPage/CommonPagePagination"
import { fetchAllReviews } from "@/services/employee"

export default function index() {
  return (
    <PaginatePanel 
      searchType="employeeName"
      fetchData={fetchAllReviews}
      title="Reviews" 
      btnTitle="" 
      header={["hashIndex","en", "remark"]}
    />
  )
}
