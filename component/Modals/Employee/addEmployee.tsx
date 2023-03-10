'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import { CalendarFetcher } from "../../../services/modals";

export default function AddEmployee({open, doj}:any) {
    const router= useRouter()
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false)


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
        firstname:"",
        email:"",
        password:"",
        phone: "",
    })
    const handleSubmit =async (e:any)=>{
        e.preventDefault()

        setVisible(true)

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST', // make sure the method is set to POST
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) // send the secret as payload in the body
          })
          const data = await response.json()
          if(data.code !== 409){

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
            
    }

  return (
    <Box sx={style}>

        <div className={styles.model_container}>
        <h1>Register</h1>
            {error &&<p className={styles.danger}>Email not valid!</p>}
            <form>
        
                <div className={styles.input}>
                <input type="text" placeholder='enter an name' onChange={(e)=>setUser({...user, firstname:e.target.value})} value={user.firstname}/>
                </div>
                <div className={styles.input}>
                <input type="text" placeholder='enter an email' onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
                </div>
                <div className={styles.input}>
                <input type="text" placeholder='enter an password' onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
                </div>
                <div className={styles.input}>
                <input type="text" placeholder='enter an phone' onChange={(e)=>setUser({...user, phone:e.target.value})} value={user.phone}/>
                </div>

                <button onClick={(e)=>handleSubmit(e)}>{!visible?"Register":<CircularProgress style={{height: "28px", width: '28px'}} color="inherit" />}</button>

        </form>
        </div>
    </Box>
  );
}
