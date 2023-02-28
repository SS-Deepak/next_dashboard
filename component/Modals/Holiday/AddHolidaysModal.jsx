'client only'


import styles from "../index.module.css"
import { Box } from "@mui/material";
import {useState} from "react"
import {useRouter} from  "next/router"
import { addHolidayFetcher } from "@/services/modalsService";
import { useRole } from "@/pages/_app";

export function AddHolidayModal({open}) {
    const router = useRouter()
    const [holiday, setHoliday] = useState({
        date: "",
        title:"",
        check:false
    })
    const {setVisible} = useRole()
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

      

      const handleSubmit =async (e) => {
        e.preventDefault()
        if(holiday.date !== "" && holiday.title !== ""){
            // fetch holiday service
            addHolidayFetcher({holiday})

            open()
            setVisible(false)
        }
      }

  return (
    <Box sx={style} className={styles.box} >

        <div className={styles.model_container}>
            <h1>Add Holiday</h1>
            {holiday.check === true && holiday.date === "" && holiday.title === "" &&<p className={styles.danger}>Please Provide Details</p>}
            <form>
                <div className={styles.input}>
                    <label>Holiday Date</label>
                    <input type="date" value={holiday.date} onBlur={()=>setHoliday({...holiday, check: true})}  onChange={(e)=>setHoliday({...holiday, date: e.target.value, check: false})}/>
                </div>
                <div className={styles.input}>
                    <label>Title</label>
                    <input type="text" value={holiday.title} onBlur={()=>setHoliday({...holiday, check: true})} onChange={(e)=>setHoliday({...holiday, title: e.target.value, check: false})} />
                </div>

                <button onClick={(e)=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    </Box>
  );
}
