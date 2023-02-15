import styles from "../CommonPage/index.module.css"
import { FormEvent } from "react"
import { GeneralPage } from "."
import { useDetails } from "@/pages/admin/employees/detail/[id]"

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
  return(
    <div className={styles.tabsBody}>
        <>{
          tabIndex === 0 ?<TabsBody1/>: tabIndex ===1?<TabsBody2 modal={modal}/>:<TabsBody3/>
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
const TabsBody1 = () => {
  
  return(
    <div className={styles.personalDetail}>
      <PersonalDetail/>

      <div className={styles.bank}>
        <h1>Bank Details</h1>
        <BankTable/>
      </div>

      <div className={styles.doc}>
        <h1>Document Upload</h1>
        <input type="file" />
        <button>Save</button>
      </div>

      <div className={styles.letter}>
        <Chip title="Offer Letter"/>
        <Chip title="Appointment Letter"/>
        <Chip title="Salary Slip"/>
        <Chip title="Releaving Letter"/>
        <Chip title="Curriculum Vitae/Resume"/>
      </div>
    </div>
)}
const TabsBody3 =()=>{
  const details = useDetails()
  return(
    <GeneralPage 
          header={["hashIndex","en", "remark"]}
          data={details}
          page="reviews"
          btnTitle="Add New Review"
        />
)}
const TabsBody2 =({modal}:any)=>{
  console.log(modal)
  const {leave} = useDetails()
  return( 
    <GeneralPage 
      btnTitle="Search"
      header={["hashIndex","name", "sol","fd","td", "status", "comment", "btns"]}
      data={leave}
      page="leaves"
      modal={modal}
    />
    )
}


// personal tabs data
const PersonalDetail = () =>{
  const {personal} = useDetails()
  
  return(
<div className={styles.biography}>
  {
    personal&&<>
        <h1>Biography</h1>
        <div className={styles.bioTop}>
          <span>150X150</span>

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
const Chip = ({title}:any) =>(
  <div className={styles.chip}>
    {title}
  </div>
)