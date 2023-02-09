import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  return (
      <CommonPage 
        title="Designation" 
        btnTitle="Add New Designation"
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
