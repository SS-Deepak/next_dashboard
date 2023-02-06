import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  return (
      <CommonPage 
        title="Department" 
        btnTitle="Add New Department"
        page="department"
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
