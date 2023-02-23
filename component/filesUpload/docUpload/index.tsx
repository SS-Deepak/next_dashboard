import styles from "../../layout/CommonPage/index.module.css"
import { exportMultipleDocs } from "@/services/employee"

export const DocumentUpload = ({call}:any) => {

    const handleChange = async (e:any) => {
        if(e.target.files){

            var formData = new FormData();
            for (const key of Object.keys(e.target.files)) {
                formData.append('file', e.target.files[key])
            }

            const data = await exportMultipleDocs({form_data: formData})
            call(data)
        }
    }
  
  
    return(
      <div className={styles.doc}>
        <h1>Document Upload</h1>
        <input type="file" multiple onChange={(e)=>handleChange(e)}/>
        <button>Save</button>
      </div>
    )
  }