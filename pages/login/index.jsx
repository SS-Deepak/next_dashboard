import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css"

export default function componentName() {
    const router = useRouter()
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passFormat = /^[0-9]{4,10}$/
    const [checkmail, setMailCheck] = useState(false)
    const [checkpass, setPassCheck] = useState(false)
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const handleSubmit =async (e)=>{
      e.preventDefault()
      const res = await fetch("http://localhost:3000/api/login",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      })  
      const data = await res.json()
      
      if(data.token){
        localStorage.setItem("token", data.token)
        router.push("/")
      }
    }
    
    console.log(user)
    useEffect(()=>{
      const res = mailformat.test(user.email)
      const pass = passFormat.test(user.password)

      setPassCheck(pass)
      setMailCheck(res)
    },[user.email, user.password])

    
  return (
    <div className={styles.loginContainer}>

      <form>
        <h1>Login</h1>
        <div className={styles.input}>
          <input type="text" placeholder='enter an email' onBlur={()=>checkmail&&setMailCheck(true)} onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
           {!checkmail && <p className={styles.danger}>Enter valid email</p>}
        </div>
        <div className={styles.input}>
          <input type="text" placeholder='enter an password' onBlur={()=> setPassCheck(true)} onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
          {!checkpass && <p className={styles.danger}>password should be minimum 4 in length</p>}
        </div>

          <button onClick={(e)=>handleSubmit(e)}>Login</button>

          <p>Don't have an account? <span onClick={()=>router.push('/register')}>click here</span></p>
      </form>
       
    </div>
  );
}
