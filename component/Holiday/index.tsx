import CommonPage from "../layout/CommonPage/index"
import {AddHolidayModal} from "../Modals/Holiday/AddHolidaysModal"
import { fetchHolidayList } from "@/services/holiday";
import {useState} from "react"

export default function componentName() {

  return (
    <CommonPage 
    title="Holidays" 
    btnTitle="Add New Holiday" 
      header={["hashIndex","hd", "day","title", "btns"]}

      body={[
      {
        hd:"16-01-2023",
        day:"Wed",
        title:"Sankranti",
      },
      {
        hd:"16-01-2023",
        day:"Wed",
        title:"Sankranti",
      },
   ]}

      buttons={[
        "editBtn",
        "deleteBtn",
      ]}
      modal={AddHolidayModal}
    />
  );
}
