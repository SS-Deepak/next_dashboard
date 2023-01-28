import styles from "../styles/list.module.css"
import { ListHeaderProps} from "../interface/List"
import { DetailList } from "./DetailList"


export const DesignationList =()=>(
    <DetailList data={{
        id:"1",
        designTitle:"Trainee",
        editBtn: true,
        deleteBtn: true,
        page:"designation"
      }}
    />
)

export const ProjectList =()=>(
    <DetailList data={{
        projectDateAdded:"11/01/2010",
        projectEstimmateDD: "09/11/2019",
        projectName: "Hobby Mobila",
        projectClient: "Alin",
        projectStatus: "InProcess",
        projectDesc: "Give support to asian food and korean food. All design and development issues.",
        projectCreatedBy: "Someone",
        projectAssignTo:["Pawan" ,"Sachin",],
        editBtn: true,
        deleteBtn: true,
        detailBtn:true,
        page:"project"
      }}
    />
)

export const ClientList =()=>(
    <DetailList data={{
        clientDateAdded: "11/08/2019",
        clientName: "Alin Varga",
        clientEmail: "test@gmail.com",
        clientPhone: "9134890121",
        editBtn: true,
        deleteBtn: true,
        page:"client"
      }}
    />
)
export const StatusList =()=>(
    <DetailList data={{
        id:"1",
        designTitle:"Active",
        editBtn: true,
        deleteBtn: true,
        page:"status"
      }}
    />
)

export const DepartmentList =()=>(
    <DetailList data={{
        id:"1",
        departTitle:"Mobile App Development",
        editBtn: true,
        deleteBtn: true,
        page:"department"
      }}
    />
)


export const EmployeeDetailList = ()=>( 
    <DetailList data={{
        id:"1",
        email:"deepak@simransoftwaresolutions.com",
        firstName:"Deepak",
        lastName:"Kumar",
        DOJ:"16-01-2023",
        loginBtn:true,
        editBtn:true,
        mailEPloginBtn:true,
        deleteBtn:true,
        welcomeMailBtn:true,
        page:"employees"
    }}
    />
)

export const ReviewDetailList = ()=>(
    <DetailList data={{
        id:"1",
        EName:"Deepak",
        ERemark:"Kumar",
        page:"Ereview"
    }}
    />
)
export const HolidayList = ()=>(
    <DetailList data={{
        id:"1",
        holiDate:"01/26/2023",
        holiDay: "Thu",
        holdayTitle: "Republic Day",
        editBtn: true,
        deleteBtn:true,
        page:"holiday"
        }}
    />
)


export const ListHeader = ({data}:ListHeaderProps)=>(
    data.page === "employees" ? <Employees/> :
    data.page === "Ereview"? <EmployeeReview/> :
    data.page === "holiday"? <Holiday/> :
    data.page === "designation"? <Designation/> :
    data.page === "department"? <DepartMent/> :
    data.page === "status"? <DepartMent/> :
    data.page === "client"? <Client/> :
    data.page === "project"? <Project/> :
     null)
   
  
 const Employees = () =>(
    <div className={styles.employeesListHeaderContainer}>
      <p>#</p>
      <p>Email</p>
      <p>First Name</p>
      <p>Last Name</p>
      <p>Date of Joining</p>
    </div>
  )
 const EmployeeReview = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.Ereview}`}>
      <p>#</p>
      <p>Employee Name</p>
      <p>Remarks</p>
    </div>
  )
 const Holiday = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.holiday}`}>
      <p>#</p>
      <p>Holiday Date</p>
      <p>Day</p>
      <p>Title</p>
    </div>
  )
 const Designation = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.designation}`}>
      <p>#</p>
      <p>Title</p>
    </div>
  )
 const DepartMent = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.designation}`}>
      <p>#</p>
      <p>Title</p>
    </div>
  )
 const Client = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.client}`}>
      <p>Date added</p>
      <p>Name</p>
      <p>Email ID</p>
      <p>Phone</p>
    </div>
  )
 const Project = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.project}`}>
      <p>Date added</p>
      <p>Estimate Delivery Date</p>
      <p>Name</p>
      <p>Client</p>
      <p>Status</p>
      <p>Description</p>
      <p>Created By</p>
      <p>Assign To</p>
    </div>
  )