import { fetchHolidayList } from "@/services/holiday";
import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  // fetchHolidayList()

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
    />
  );
}
