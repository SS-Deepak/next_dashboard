import { useRouter } from "next/router"
import styles from "../CommonPage/index.module.css"
import { FormEvent, useEffect, useState } from "react"
import { GeneralPage } from "."
import { useDetails } from "@/pages/admin/employees/detail/[id]"
import { fetchReviews,exportDocs } from "@/services/employee"
import { DocumentUpload } from "@/component/filesUpload/docUpload"
import ProfileImage from '../../filesUpload/profilePic/index'

// upper tabs
export const TabsHeader = ({mainTabs, setTabIndex}:any) => (
  <div className={styles.tabsHeader} ref={mainTabs}>
      <div className={`${styles.tabs} ${styles.show}`} onClick={(e)=>handleTabs(e, setTabIndex)}>Personal Details</div>
      <div className={styles.tabs} onClick={(e)=>handleTabs(e, setTabIndex)}>Leaves</div>
      <div className={styles.tabs} onClick={(e)=>handleTabs(e, setTabIndex)}>Reviews</div>
  </div>
)

// main tabs body
export const TabsBody = ({tabIndex,modal}:any) => {
  const {query} = useRouter()
  return(
    <div className={styles.tabsBody}>
        <>{
          tabIndex === 0 ?<TabsBody1 id={query.id}/>: tabIndex ===1?<TabsBody2 />:<TabsBody3 modal={modal}/>
        }</>
    </div>
  )
}

// function for the activity of tabs
const handleTabs = (e:FormEvent<HTMLInputElement> | any, setTabIndex:any) => {
 
    const list = Array.from(e.target.parentElement.childNodes)
    
    list.map((item:any)=>{
      item.classList.remove(`${styles.show}`)
    })
    list.map((item:any, index:number)=>{
      if(e.target.innerHTML ===item.innerHTML){
        setTabIndex(index)
        item.classList.toggle(`${styles.show}`)
      }
    })
}



// based on tabs index value tabs will display
const TabsBody1 = ({id}:any) => {
  
  return(
    <div className={styles.personalDetail}>
      <PersonalDetail/>

      <div className={styles.bank}>
        <h1>Bank Details</h1>
        <BankTable/>
      </div>

      <div className={styles.doc}>
        <h1>Document Upload</h1>
        <DocumentUpload call={(data:any)=>console.log(data,"data")}/>
        <button>Save</button>
      </div>

      <div className={styles.letter}>
        <Chip title="Offer Letter"  id={id} link="offer_letter"/>
        <Chip title="Appointment Letter"  id={id} link="appoint_letter"/>
        <Chip title="Salary Slip"/>
        <Chip title="Releaving Letter"  id={id} link="releaving_letter"/>
        <Chip title="Curriculum Vitae/Resume"/>
      </div>
    </div>
)}
const TabsBody3 =({modal}:any)=>{
  const [data, setData] = useState([]) as any
  !data.status &&fetchReviews(setData)
  return(
    <GeneralPage 
          header={["hashIndex","en", "remark"]}
          data={data.data}
          page="reviews"
          btnTitle="Add New Review"
          modal={modal}
        />
)}
const TabsBody2 =()=>{
  const {leave} = useDetails()
  return( 
    <GeneralPage 
      btnTitle="Search"
      header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
      data={leave}
      page="leaves"
    />
    )
}


// personal tabs data
const PersonalDetail = () =>{
  const {personal} = useDetails()
  const [change, setChange] = useState(false)
  const [selectedImage, setSelectedImage] = useState("") 
  const [selectedFile, setSelectedFile] = useState<File>() as any

  
  return(
<div className={styles.biography}>
  {
    personal&&<>
        <h1>Biography</h1>
        <div className={styles.bioTop}>
          <ProfileImage/>

          <div className={styles.bioDetails}>
            <h2>{personal.firstname}</h2>
            <p><span>Designation:</span> {personal.designation} ({personal.doj})</p>
            <p><span>Department:</span>{personal.department}</p>
          </div>
        </div>

        <div className={styles.bioTable}>
            <PersonalTable data={personal}/>
        </div>
        </>
    }
      </div>

)}
const PersonalTable = ({data}:any) => {
  return(

  <table>
    <tbody>
      <tr>
        <th>Email</th>
        <td>{data.email}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>{data.phoneNo?data.phoneNo:"N/A"}</td>
      </tr>
      <tr>
        <th>DOB</th>
        <td>{data.dob?data.dob:"N/A"}</td>
      </tr>
      <tr>
        <th>Father Name</th>
        <td>{data.fatherName?data.fatherName:"N/A"}</td>
      </tr>
      <tr>
        <th>Mother Name</th>
        <td>{data.motherName?data.motherName:"N/A"}</td>
      </tr>   
      <tr>
        <th>Gender</th>
        <td>{data.gender?data.gender:"N/A"}</td>
      </tr>
      <tr>
        <th>Religion</th>
        <td>{data.religion?data.religion:"N/A"}</td>
      </tr>
      <tr>
        <th>Nationality</th>
        <td>{data.nationality?data.nationality:"N/A"}</td>
      </tr>
    </tbody>
  </table>
)}

// back details data
const BankTable = ()=>{
  const details = useDetails()
  return(
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Bank Name</td>
        <td>{details.BankName?details.BankName:"N/A"}</td>
      </tr>
      <tr>
        <td>Bank Account Number</td>
        <td>{details.BankAccountNo?details.BankAccountNo:"N/A"}</td>
      </tr>
      <tr>
        <td>Bank IFSC Code</td>
        <td>{details.BankIFSCCode?details.BankIFSCCode:"N/A"}</td>
      </tr>
      <tr>
        <td>Branch Name</td>
        <td>{details.BankBranch?details.BankBranch:"N/A"}</td>
      </tr>
      <tr>
        <td>Name on Account</td>
        <td>{details.BankAccountName?details.BankAccountName:"N/A"}</td>
      </tr>
    </tbody>
  </table>
)}

// document details data
const Chip = ({title}:any) =>{
  const {query} = useRouter()
  const data = title.toLowerCase().split(" ").join("_")
  const selection  = ["offer_letter", "appointment_letter", "releaving_letter"]
  const yes = selection.includes(data)
  const url = `http://localhost:3000/api/employees/${query.id}/${data}`
  return(
<>{
  yes?
  <a target="_blank" rel="noopener" href={url}>
    <div className={styles.chip}>
      {title}
    </div>
  </a>:<div className={styles.chip}>
      {title}
    </div>
}</>


)
}
