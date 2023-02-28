import { masterServiceFetch } from "@/services/modalsService";
import PaginationPanel from "@/component/layout/CommonPage/CommonPagePagination"
import { DesignationModal } from "../Modals/Masters/designationModal";

export default function componentName() {
  return (
    <PaginationPanel
      searchType="value"
      fetchData={masterServiceFetch} 
      title="Designation" 
      btnTitle="Add New Designation"
      header={["hashIndex","title", "btns"]}
      buttons={[
        "deleteBtn",
        ]}
        modal={{Add:DesignationModal}} 
    />

  );
}



