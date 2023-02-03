import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function componentName() {
    const router = useRouter()
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        phone: "",
        thumbnail: "638b49def5d942fe13b794d1"
    })
    const handleSubmit =async ()=>{
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST', // make sure the method is set to POST
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) // send the secret as payload in the body
          })
          const data = await response.json()
          console.log(data)
            
    }

    useEffect(()=>{
        const auth = localStorage.getItem("token")
        if(auth){
            router.push("/")
        }
    })
  return (
    <>
        <h1>Register</h1>

        <input type="text" placeholder='enter an name' onChange={(e)=>setUser({...user, name:e.target.value})} value={user.name}/>
        <input type="text" placeholder='enter an email' onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
        <input type="text" placeholder='enter an password' onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
        <input type="text" placeholder='enter an phone' onChange={(e)=>setUser({...user, phone:e.target.value})} value={user.phone}/>

        <button onClick={()=>handleSubmit()}>Register</button>
    </>
  );
}
