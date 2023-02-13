'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import { CalendarFetcher } from "../../../services/modals";

export function reviewEmployee({open, doj}:any) {
    const router= useRouter()

    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        name: "",
        remark: ""
    })
    
   


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

      const handleSubmit = async (e:any)=>{
        e.preventDefault()
        setVisible(true)
        setTimeout(()=>{
            open()
            setVisible(false)
            router.push("/calendar")
        },2500)
        console.log(data)
        // CalendarFetcher({id:router.query.id, year, month, yearCode, data})
      } 

  return (
    <Box sx={style}>

        <div className={styles.model_container}>
            <h1>Add Employee</h1>
            
            <form>
                <div className={styles.input}>
                    <label>Employee Name</label>
                    <input type="text" value={data.name} onChange={(e)=>setData({...data, name: e.target.value})}/>
                </div>
                <div className={styles.input}>
                    <label>Remark</label>
                    <input type="text"  value={data.remark} onChange={(e)=>setData({...data, remark: e.target.value})}/>
                </div>

                <button onClick={handleSubmit} >{!visible?"Add":<CircularProgress style={{height: "28px", width: '28px'}} color="inherit" />}</button>
            </form>
        </div>
    </Box>
  );
}
