import { masterServiceFetch } from "@/services/modalsService";
import PaginationPanel from "@/component/layout/CommonPage/CommonPagePagination"
import { DepartmentModal } from "../Modals/Masters/departmentModal";

export default function componentName() {
  return (
    <PaginationPanel
      searchType="value"
      fetchData={masterServiceFetch} 
      title="Department" 
      header={["hashIndex","title", "btns"]}
      btnTitle="Add New Department"
      buttons={[
        "deleteBtn",
        ]}
        modal={{Add:DepartmentModal}} 
    />

  );
}


