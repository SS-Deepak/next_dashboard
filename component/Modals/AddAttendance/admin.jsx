import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import {CalendarFetcher} from "../../../services/modals"

export default function AddHolidayModal({open, doj}) {
    const router= useRouter()

    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState()
    const currentYear = new Date(Date.now()).getFullYear()
    
    const dojYear = new Date(doj).getFullYear()
    const yearCode = currentYear - dojYear
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth()

    const selectedDate = new Date(date).getDate()

    const [data, setData] = useState({
        timeIn: "",
        timeOut: "",
        // date: new Date().getDate()
        date: selectedDate
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
        
        CalendarFetcher({id:router.query.id, year, month, yearCode, data})
      } 

  return (
    <Box sx={style}>

        <div className={styles.model_container}>
            <h1>Add Attendence</h1>
            
            <form>
                <div className={styles.input}>
                    <label>Admin Attendence</label>
                    <input type="date"  value={date} onChange={(e)=>{setDate(e.target.value)
                    setData({...data, date:new Date(e.target.value).getDate()})
                    }}/>
                </div>

                <button onClick={handleSubmit} >{!visible?"Add":<CircularProgress style={{height: "28px", width: '28px'}} color="inherit" />}</button>
            </form>
        </div>
    </Box>
  );
}
