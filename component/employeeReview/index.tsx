import CommonPage from "../layout/CommonPage"


export default function index() {
  return (
    <CommonPage 
      title="Employee Reviews" 
      btnTitle="Add New Employee Review" 
      header={["hashIndex","en", "remark"]}

      body={[
      {
        en:"Deepak",
        remark:"Kumar",
      },
      {
        en:"Deepak",
        remark:"Kumar",
      }
    ]}

    />
  )
}
