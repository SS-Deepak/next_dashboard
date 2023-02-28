'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import {useRouter} from  "next/router"
import { addLeave, masterService } from "@/services/modalsService";
import {useRole} from "pages/_app"

export function DepartmentModal({open}:any) {
    const router = useRouter()
    const [data, setData] = useState({
        title:"",
        check: false,
        type: "department"
    })
    const {setVisible} = useRole() as any
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 20,
        p: 4,
      };

      

      const handleSubmit =async (e:any) => {
        e.preventDefault()
        if(data.title !== ""){
            setVisible(false)
            // fetch holiday service
            masterService({data})

            open()
            // router.reload()
            
        }else{
            setData({...data, check:true})
        }

        setTimeout(()=>{
            setData({...data, check: false})
        },2000)
      }

  return (
    <Box sx={style} className={styles.box} >

        <div className={styles.model_container}>
            <h1>Add Department</h1>
            {data.check === true && data.title === ""  &&<p className={styles.danger}>Please Provide Details</p>}
            <form>
                <div className={styles.input}>
                    <label>Name</label>
                    <input type="text" value={data.title} onBlur={()=>setData({...data, check: true})}  onChange={(e)=>setData({...data, title: e.target.value, check: false})}/>
                </div>
                

                <button onClick={(e)=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    </Box>
  );
}
