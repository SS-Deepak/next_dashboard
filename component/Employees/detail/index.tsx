import CommonPage from "@/component/layout/CommonPage/index"
import {reviewEmployee} from "../../Modals/Employee/review"

export default function componentName() {
  
  return (
    <CommonPage
        title="Employees"
        details={true} 
        modal={reviewEmployee}
        /> 
  );
}
