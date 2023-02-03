import {useState, useEffect} from "react"
import styles from "../styles/list.module.css"
import { ListHeaderProps, holidy} from "../interface/List"
import { DetailList } from "./DetailList"
import useSWR from "swr"
import {useRouter} from "next/router"
import { Modal } from "@mui/material"
import { EditHoliday } from "@/component/Modals/Holiday/EditHolidayModal"


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
export const AppraisalList =()=>(
    <DetailList data={{
        id:"1",
        AEName:"Kusum Maurya",
        payday: "07/18/2018 05:30 AM",
        ctc: "1200.00",
        editBtn: true,
        deleteBtn: true,
        page:"appraisal"
      }}
    />
)


export const EmployeeDetailList = ()=>( 
  <>
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
    </>
)

export const LeaveList = ()=>(
    <DetailList data={{
        id:"1",
        EName:"Deepak",
        subject: "Fever",
        Lfrom: "10/02/2011",
        Lto: "10/02/2011",
        status: "Pending",
        Lcomment:"Comments",
        acceptBtn: true,
        rejectBtn: true,
        page:"leave"
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


export const HolidayList = ()=>{
  const {query} = useRouter()
  const [show,setShow]  = useState<boolean>(false)
  const router = useRouter()
  const [holidy, setHodays] = useState<holidy[]>()

  useEffect(()=>{
    setShow(Boolean(query.showModal))
  })

  const call = async ()=>{

    const res= await fetch("http://localhost:3000/api/holidays",{
      "headers":{
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await res.json()
    setHodays(data.data)
  }

  useEffect(()=>{
    call()

  },[query.load])
    useSWR( "http://localhost:3000/api/holidays", call, {refreshInterval: 1000})
  return(
    
    
    <>
    {
      query.showModal ? 
      <Modal
        open={show}
        onClose={()=>router.push("/holiday")}
      ><EditHoliday id={query.id}/></Modal> : null
    }
   {
     holidy?.map((item:any, index:number)=>{
      const date =  new Date(item.date).toDateString().split(" ")
      return(

      
      <DetailList key={index} data={{
        id:String(index+1),
        EID: item.id,  
        holiDate:`${date[1]}-${date[2]}-${date[3]}`,
        holiDay: `${date[0]}`,
        holdayTitle: item.title,
        editBtn: true,
        deleteBtn:true,
        page:"holiday"
      }}
      />

    )})
   }
    
    
  </>
 )
}



// main function to call list header
export const ListHeader = ({data}:ListHeaderProps)=>(
    data.page === "employees" ? <Employees/> :
    data.page === "Ereview"? <EmployeeReview/> :
    data.page === "holiday"? <Holiday/> :
    data.page === "designation"? <Designation/> :
    data.page === "department"? <DepartMent/> :
    data.page === "status"? <DepartMent/> :
    data.page === "client"? <Client/> :
    data.page === "project"? <Project/> :
    data.page === "appraisal"? <Appraisal/> :
    data.page === "leave"? <Leave/> :
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
 const Leave = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.leave}`}>
      <p>#</p>
      <p>Name</p>
      <p>Subject of Leave</p>
      <p>From Date</p>
      <p>To Date</p>
      <p>Status</p>
      <p>Comment</p>
      <p>Action</p>
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
 const Appraisal = () =>(
    <div className={`${styles.employeesListHeaderContainer} ${styles.appraisal}`}>
      <p>#</p>
      <p>Employee Name</p>
      <p>Pay Date</p>
      <p>CTC</p>
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