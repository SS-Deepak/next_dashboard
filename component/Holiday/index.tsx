import CommonPage from "../layout/CommonPage/index"
import {useEffect} from "react"
import useSWR from "swr"

export default function componentName() {

  return (
    <CommonPage 
    title="Holidays" 
    btnTitle="Add New Holiday" 
    page="holiday"
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
