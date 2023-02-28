import styles from "../../layout/CommonPage/index.module.css"
import { exportMultipleDocs, updateFile } from "@/services/employeeService"
import { SettingsData } from "@/services/settingService"

export const DocumentUpload = ({call}:any) => {

    const handleChange = async (e:any) => {
        const label = e.target.previousSibling.innerText
        const updatedLabel = label.toString().toLowerCase().split(" ").join("_")

        if(e.target.files){

            var formData = new FormData();
            for (const key of Object.keys(e.target.files)) {
                formData.append('file', e.target.files[key])
            }

            // save data in files module
            const data = await exportMultipleDocs({label: updatedLabel, form_data: formData})
            
            // it can be used on behalve of user request
            // call(data)

            if(call === "employee"){
                // store file in employees attachment data
                updateFile({file: data.data[0]._id, label: updatedLabel})
            }else{
                // store file in setting data
                SettingsData({[updatedLabel]: data.data[0]._id})
            }
        }
    }
  
  
    return(
        <input type="file" multiple onChange={(e)=>handleChange(e)}/>
    )
  }