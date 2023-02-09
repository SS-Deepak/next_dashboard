import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  return (
      <CommonPage 
        title="Status" 
        btnTitle="Add New Status"
        header={["hashIndex","title", "btns"]}

      body={[
      {
        
        title:"Sankranti",
      },
      {
       
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
