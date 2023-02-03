import { Box } from "@mui/material";
import styles from "../index.module.css"
import {useState, useRef} from "react"
import { useRouter } from "next/router";

export  function EditHoliday({id}) {
  const ref = useRef()
  const router = useRouter()
  const [check, setCheck] = useState(false)
  const [holiday, setHoliday] = useState({
    date:"",
    title:""
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

  const handleSubmit =async (e) => {
    e.preventDefault()
    
    Object.keys(holiday).forEach(key => {
      if (holiday[key] === '') {
        delete holiday[key];
      }
    });
    
    
        const res = await fetch(`http://localhost:3000/api/holidays/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({...holiday})
        })

        router.push({
            pathname: "/holiday",
            query:{
                load: true
            },
        })
  }
  return (
    <Box sx={style} ref={ref}>
        <div className={styles.model_container}>
            <h1>Edit Holiday</h1>
            {check === true && holiday.date === "" && holiday.title === "" &&<p className={styles.danger}>Please Provide Details</p>}
            <form>
                <div className={styles.input}>
                    <label>Holiday Date</label>
                    <input type="date" value={holiday.date} onBlur={()=>setCheck(true)}  onChange={(e)=>{
                      setHoliday({...holiday, date: e.target.value}) 
                      setCheck(false)}}/>
                </div>
                <div className={styles.input}>
                    <label>Title</label>
                    <input type="text" value={holiday.title} onBlur={()=>setCheck(true)} onChange={(e)=>{
                      setHoliday({...holiday, title: e.target.value, check: false})
                      setCheck(false)} } />
                </div>

                <button onClick={(e)=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    </Box>
  );
}
