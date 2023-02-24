import { useRouter } from 'next/router';
import React, {  useState } from 'react';
import styles from "./index.module.css"

export default function componentName() {
    const router = useRouter()
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        phoneNo: "",
    })

    const handleSubmit =async (e)=>{
      e.preventDefault()

        const response = await fetch(`${process.env.BASE_PATH}/register`, {
            method: 'POST', // make sure the method is set to POST
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) // send the secret as payload in the body
          })
          const data = await response.json()
    }


  return (
    <div className={styles.registerContainer}>

      <form>
        <h1>Register</h1>
        
        <div className={styles.input}>
          <input type="text" placeholder='enter an name' onChange={(e)=>setUser({...user, name:e.target.value})} value={user.name}/>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder='enter an email' onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder='enter an password' onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder='enter an phone' onChange={(e)=>setUser({...user, phoneNo:e.target.value})} value={user.phoneNo}/>
        </div>

        <button onClick={(e)=>handleSubmit(e)}>Register</button>
        <p>Already have an account? <span onClick={()=>router.push('/login')}>click here</span></p>

        </form>
       
       </div>
  );
}
