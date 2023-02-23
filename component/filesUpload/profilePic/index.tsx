import { exportDocs, updateProfile } from "@/services/employee";
import styles from "../../layout/CommonPage/index.module.css"
import {useState} from "react"


export default function componentName() {
    const [selectedImage, setSelectedImage] = useState<string>() 


    const handleChange = async (e:any) => {
        if(e.target.files){

            const file = e.target.files[0]

            const formData = new FormData()
            formData.append("file", file)
   
            const data = await exportDocs({form_data: formData})
            const upload = await updateProfile(data.fileId)

            if(upload?.code === 201){
                setSelectedImage(data.src)
            }else{
                alert("failed")
            }
        }
    }
  return (
    <form className={styles.fileRead} >
        <input 
            type="file" 
            name ="first" 
            id="first" 
            onChange={(e)=>handleChange(e)}
        />
        {selectedImage?<img className={styles.thumbnail} src={selectedImage} alt="thumbnail" />:<span>150X150</span>}
    </form>
  );
}
