import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';

export default function AddHolidayModal({open}) {
    
    const router= useRouter()
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        timeIn: "",
        timeOut: "",
        // date: new Date().getDate()
        date: 27
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

      const handleSubmit = async (e)=>{
        e.preventDefault()
        setVisible(true)
        setTimeout(()=>{
            open()
            setVisible(false)
            router.push("/calendar")
        },2500)
        
        await fetch(`http://localhost:3000/api/attendance/${router.query.id}?year=2023&month=0&yearCode=2`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data})
        })

      } 

  return (
    <Box sx={style}>

        <div className={styles.model_container}>
            <h1>Add Attendence</h1>
            
            <form>
                <div className={styles.input}>
                    <label>Time In</label>
                    <input type="date" value={data.timeIn} onChange={(e)=>setData({...data, timeIn: e.target.value})}/>
                </div>
                <div className={styles.input}>
                    <label>Time Out</label>
                    <input type="date"  value={data.timeOut} onChange={(e)=>setData({...data, timeOut: e.target.value})}/>
                </div>

                <button onClick={handleSubmit} >{!visible?"Add":<CircularProgress style={{height: "28px", width: '28px'}} color="inherit" />}</button>
            </form>
        </div>
    </Box>
  );
}
