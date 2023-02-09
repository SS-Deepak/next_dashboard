import CommonPage from "../layout/CommonPage/index"

export default function index() {
  // const data = use 
  return (
    <CommonPage 
        title="Leave"
        // btnTitle="Add New Employee" 
      
      header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}

      body={[{
        name:"deepak",
        sol:"Fever",
        fd:"16-01-2023",
        td:"16-01-2023",
        status: "Rejected",
        comment: "I know what I am doing"
      },
      {
        name:"deepak",
        sol:"Fever",
        fd:"16-01-2023",
        td:"16-01-2023",
        status: "Accepted",
        comment: "I know what I am doing"
      },
      {
        name:"deepak",
        sol:"Fever",
        fd:"16-01-2023",
        td:"16-01-2023",
        status: "Pending",
        comment: "I know what I am doing"
      }]}

      buttons={[
        "rejectBtn",
        "acceptBtn",
      ]} 

        />
  )
}
