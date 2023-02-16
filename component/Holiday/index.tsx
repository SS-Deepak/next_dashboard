import {AddHolidayModal} from "../Modals/Holiday/AddHolidaysModal"
import PaginatePanel from "../layout/CommonPage/CommonPagePagination"
import { fetchHolidayList } from "@/services/employee";

export default function componentName() {
  return (
    <PaginatePanel
      searchType="title"
      fetchData={fetchHolidayList}
      title="Holidays" 
      btnTitle="Add New Holiday" 
      header={["hashIndex","hd","title", "btns"]}
      buttons={[
        "editBtn",
        "deleteBtn",
      ]}
      modal={AddHolidayModal}
    
    />
  );
}
