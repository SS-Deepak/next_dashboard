import { useEdit } from "@/pages/admin/employees/edit/[id]";
import { edit } from "@/services/editEmployeeAdminService";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import Container from "../employeesEdit/container"
import {Input} from "../employeesEdit/inputs"
import styles from "../employeesEdit/index.module.css"
import { fetchDetails, SettingsData } from "@/services/settingService";

const SettingContext = createContext({})
export const useSetting = () => useContext(SettingContext)


export default function componentName() {
  const[status, setStatus] = useState()
  const [data, setBody] = useState("") as any
  const router  = useRouter()
  const edit  = useEdit()

  const offerLetter = Object.entries(data??[]).filter((item:any)=>(
    item[1].name === "offer_letter"
  )) as any
  const appointLetter = Object.entries(data??[]).filter((item:any)=>(
    item[1].name === "appointment_letter"
  )) as any
  const releavingLetter = Object.entries(data??[]).filter((item:any)=>(
    (item[1].name === "releaving_letter")
  )) as any
  const welcomeEmail = Object.entries(data??[]).filter((item:any)=>(
    (item[1].name === "welcome_email")
  )) as any
  const loginCredential = Object.entries(data??[]).filter((item:any)=>(
    (item[1].name === "login_credential")
  )) as any


  const [finalData, setFinalData] = useState("") as any

  if(status){
    alert("Details updated successfully✔✔")
  }

  fetchDetails({setBody})
  
  return (
    <SettingContext.Provider value={{finalData, setFinalData}}>
    <div className={styles.editContainer}>
        <h1>Add/Edit Employees</h1>
        <div className={styles.detailsContainer}>
            <Container type="setting" value={data} title="Company Detail" list={["Company Name", "Phone Number", "Address", "Cell Number", "City", "Logo", "State", "COMPANY_IMAGE", "COuntry", "Email Address", "Time Zone", "Pan Number", "Zip code", "GST Number", "Website Name", "PayPal Email"]}/>
            <Container type="setting" value={data} title="SMTP Details" list={["SMTP Host", "SMTP Port", "SMTP Username", "SMTP Password", "SMTP Encryption", "BLANK", "From Email", "From Name"]}/>

            <div className={styles.detailsBox}>
                <h3>Letter setting</h3>

                <div className={styles.textAreaContainer}>
                    <label htmlFor="offter_letter">Content for Offer Letter</label>
                    <textarea name="offer_letter" id="offer_letter" value={finalData.offer_letter  ? finalData["offer_letter"] :offerLetter[0] !== undefined && offerLetter.length>0 ? offerLetter[0][1].value:'' } onChange={(e)=>setFinalData({...finalData,  offer_letter: e.target.value})}  className={styles.textArea} ></textarea>
                </div>
                <div className={styles.textAreaContainer}>
                    <label htmlFor="appoint_letter">Content for Appointment Letter</label>
                    <textarea name="appointment_letter" id="appointment_letter"  value={finalData.appointment_letter  ? finalData["appointment_letter"] :appointLetter[0] !== undefined && offerLetter.length>0 ? appointLetter[0][1].value:'' } onChange={(e)=>setFinalData({...finalData,  appointment_letter: e.target.value})} className={styles.textArea}></textarea>
                </div>
                <div className={styles.textAreaContainer}>
                    <label htmlFor="releaving_letter">Content for Releaving Letter</label>
                    <textarea name="releaving_letter" id="releaving_letter" value={finalData.releaving_letter  ? finalData["releaving_letter"] :releavingLetter[0] !== undefined && releavingLetter.length>0 ? releavingLetter[0][1].value:'' } onChange={(e)=>setFinalData({...finalData,  releaving_letter: e.target.value})} className={styles.textArea} ></textarea>
                </div>

                <div className={styles.detailsBoxContainer}>
                    <Input item={"Line Gap From Top"}/>
                    <Input item={"BLANK"}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Placeholders</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div className={styles.detailsBox}>
                <h3>Mail template setting</h3>

                <div className={styles.textAreaContainer}>
                    <label htmlFor="welcome_email">Content for Welcome Email</label>
                    <textarea name="welcome_email" id="welcome_email" value={welcomeEmail[0] !== undefined && welcomeEmail.length>0 ? welcomeEmail[0][1].value : finalData["welcome_email"]} onChange={(e)=>setFinalData({...finalData,  welcome_email: e.target.value})} className={styles.textArea}></textarea>
                </div>
                <div className={styles.textAreaContainer}>
                    <label htmlFor="login_credential">Content For Login Credential Email</label>
                    <textarea name="login_credential" id="login_credential" value={loginCredential[0] !== undefined && loginCredential.length>0 ? loginCredential[0][1].value : finalData["login_credential"]} onChange={(e)=>setFinalData({...finalData,  login_credential: e.target.value})} className={styles.textArea}></textarea>
                </div>
                

                <div className={styles.detailsBoxContainer}>
                    <table>
                        <thead>
                            <tr>
                                <th>Placeholders</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                            <tr>
                                <td>{"{{%employee_fname}}"}</td>
                                <td>Employee's employee_fname</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <button onClick={()=>filterData(finalData,router, setStatus)}>Save</button>
        </div>
    </div>
    </SettingContext.Provider>
  );
}




const filterData = (data:any, router:any,setStatus:any) =>{

  SettingsData(data, setStatus)
    router.reload()

//   edit(query.id, result, setStatus)
}