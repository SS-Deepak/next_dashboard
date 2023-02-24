'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import { changeRole } from "@/services/employeeService";

export default function AddAdmin({open, doj}:any) {
    const router= useRouter()
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(false) as any

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

     
    const [user, setUser] = useState({
        email:"",
        role: ""
    })
    const handleSubmit =async (e:any)=>{
        e.preventDefault()
        const token = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : localStorage.getItem("token") 
        setVisible(true)

        try{
        changeRole({user, token,setStatus})
        
        if(status !== 409){
          setTimeout(()=>{
              open()
              setVisible(false)
              router.reload()
          },2500)
        }else{
            setError(true)
            setTimeout(()=>{
                setError(false)
                setVisible(false)
            },1500)
        }
      }catch(error){
        console.log(error)
      } 
    }

  return (
    <Box sx={style}>

        <div className={styles.model_container}>
        <h1>Add New Admin</h1>
            {error &&<p className={styles.danger}>Email not valid!</p>}
            <form>
        
                <div className={styles.input}>
                <input type="text" placeholder='enter an email' onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
                </div>
                <div className={styles.input}>
                <input type="text" placeholder='enter role - admin | employee ' onChange={(e)=>setUser({...user, role:e.target.value})} value={user.role}/>
                </div>
               

                <button onClick={(e)=>handleSubmit(e)}>{!visible?"Add":<CircularProgress style={{height: "28px", width: '28px'}} color="inherit" />}</button>

        </form>
        </div>
    </Box>
  );
}
