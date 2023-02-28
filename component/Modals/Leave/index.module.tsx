'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import {useRouter} from  "next/router"
import { addLeave } from "@/services/modalsService";

export function Make_A_Leave({open}:any) {
    const router = useRouter()
    const [leave, setLeave] = useState({
        name: "",
        subject: "",
        fromdate: "",
        todate:"",
        check:false
    })
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
        if(leave.name !== "" && leave.subject !== "" && leave.fromdate !== "" && leave.todate !== ""){
            // fetch holiday service
            addLeave({leave})

            open()
            router.push({
                pathname: "/admin/holiday",
                query:{
                    load: true
                }
            })
        }else{
            setLeave({...leave, check:true})
        }

        setTimeout(()=>{
            setLeave({...leave, check: false})
        },2000)
      }

  return (
    <Box sx={style} className={styles.box} >

        <div className={styles.model_container}>
            <h1>Request for Leave</h1>
            {leave.check === true && leave.name === "" && leave.subject === "" &&leave.fromdate === "" &&leave.todate === "" &&<p className={styles.danger}>Please Provide Details</p>}
            <form>
                <div className={styles.input}>
                    <label>Name</label>
                    <input type="text" value={leave.name} onBlur={()=>setLeave({...leave, check: true})}  onChange={(e)=>setLeave({...leave, name: e.target.value, check: false})}/>
                </div>
                <div className={styles.input}>
                    <label>Subject of leave</label>
                    <input type="text" value={leave.subject} onBlur={()=>setLeave({...leave, check: true})}  onChange={(e)=>setLeave({...leave, subject: e.target.value, check: false})}/>
                </div>
                <div className={styles.input}>
                    <label>From Date</label>
                    <input type="date" value={leave.fromdate} onBlur={()=>setLeave({...leave, check: true})}  onChange={(e)=>setLeave({...leave, fromdate: e.target.value, check: false})}/>
                </div>
                <div className={styles.input}>
                    <label>To Date</label>
                    <input type="date" value={leave.todate} onBlur={()=>setLeave({...leave, check: true})}  onChange={(e)=>setLeave({...leave, todate: e.target.value, check: false})}/>
                </div>
                

                <button onClick={(e)=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    </Box>
  );
}
