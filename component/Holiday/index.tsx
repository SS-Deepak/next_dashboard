import CommonPage from "../layout/CommonPage/index"
import {AddHolidayModal} from "../Modals/Holiday/AddHolidaysModal"
import {useState} from "react"
import PaginatePanel from "../layout/CommonPage/CommonPagePagination"
import { fetchHolidayList } from "@/services/holiday";

export default function componentName({data}:any) {
  return (
    <PaginatePanel
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
