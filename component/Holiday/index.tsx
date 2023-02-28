import {AddHolidayModal} from "../Modals/Holiday/AddHolidaysModal"
import PaginatePanel from "../layout/CommonPage/CommonPagePagination"
import { fetchHolidayList } from "@/services/employeeService";

export default function componentName(emp:any) {
  return (
    <PaginatePanel
      searchType="title"
      fetchData={fetchHolidayList}
      main={emp}
      title="Holidays" 
      btnTitle={!emp.emp && "Add New Holiday" }
      header={["hashIndex","hd","title", "btns"]}
      buttons={!emp.emp && [
        "editBtn",
        "deleteBtn",
      ]}
      modal={{Add:AddHolidayModal}}
    
    />
  );
}
