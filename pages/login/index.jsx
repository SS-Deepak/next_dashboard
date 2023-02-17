import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css"

export default function componentName() {
    const router = useRouter()
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passFormat = /^[0-9]{4,10}$/
    const [checkmail, setMailCheck] = useState(false)
    const [checkpass, setPassCheck] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    
    const handleSubmit =async (e)=>{
      e.preventDefault()

      if(user.email.trim() === "" || user.password.trim() === ""){
        setError(true)
        return
      }
      
      const res = await fetch(`${process.env.BASE_PATH}/login`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      })  
      const data = await res.json()
      if(data.status === false) setError(true)
      
      if(data.token){
        const d = new Date();
        d.setTime(d.getTime() + (40*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "role" + "=" + data.role + ";" + expires + ";path=/";
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data))
            router.push("/")
        }
    }
    
    useEffect(()=>{
      const res = mailformat.test(user.email)
      const pass = passFormat.test(user.password)

      setPassCheck(pass)
      setMailCheck(res)
    },[user.email, user.password])

    useEffect(()=>{

      setTimeout(()=>{
        setError(false)
      },4000)
    })

  return (
    <div className={styles.loginContainer}>
      { <div className={!error ? styles.wentWrong: `${styles.wentWrong} ${styles.show}`}>Something went wrong!</div>}
      <form>
        <h1>Login</h1>
        <div className={styles.input}>
          <input type="text" placeholder='enter an email' onBlur={()=>checkmail&&setMailCheck(true)} onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
           {/* {!checkmail && <p className={styles.danger}>Enter valid email</p>} */}
        </div>
        <div className={styles.input}>
          <input type="text" placeholder='enter an password' onBlur={()=> setPassCheck(true)} onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
          {/* {!checkpass && <p className={styles.danger}>password should be minimum 4 in length</p>} */}
        </div>

          <button onClick={(e)=>handleSubmit(e)}>Login</button>

          <p>Don't have an account? <span onClick={()=>router.push('/register')}>click here</span></p>
      </form>
       
    </div>
  );
}
