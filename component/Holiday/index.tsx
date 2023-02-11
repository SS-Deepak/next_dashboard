import CommonPage from "../layout/CommonPage/index"
import {AddHolidayModal} from "../Modals/Holiday/AddHolidaysModal"
import { fetchHolidayList } from "@/services/holiday";
import {useState} from "react"

export default function componentName({data}:any) {
  return (
    <CommonPage 
    title="Holidays" 
    btnTitle="Add New Holiday" 
      header={["hashIndex","hd","title", "btns"]}
      
      body={data.data}

      buttons={[
        "editBtn",
        "deleteBtn",
      ]}
      modal={AddHolidayModal}
    
    />
  );
}
