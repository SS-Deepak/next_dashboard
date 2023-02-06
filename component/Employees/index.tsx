import CommonPage from "../layout/CommonPage/index"
export default function index() {
  return (
    <CommonPage
      title="Employees" 
      btnTitle="Add New Employee" 
      page="employees"
      
      header={["hashIndex","emp_email", "fn","ln","doj", "btns"]}

      body={[{
        emp_email:"deepak@simransoftwaresolutions.com",
        firstName:"Deepak",
        lastName:"Kumar",
        doj:"16-01-2023",
      },
    {
      emp_email:"deepak@simransoftwaresolutions.com",
        firstName:"Deepak",
        lastName:"Kumar234",
        doj:"16-01-2023",
      }]}

      buttons={[
        "loginBtn",
        "editBtn",
        "mailEPloginBtn",
        "deleteBtn",
        "welcomeMailBtn"
      ]}
    /> 
  )
}

