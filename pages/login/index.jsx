import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function componentName() {
    const router = useRouter()
    const [local, setLocal]=useState()

    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const handleSubmit =async ()=>{
      const res = await fetch("http://localhost:3000/api/login",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      })  
      const data = await res.json()

      localStorage.setItem("token",data.token)
      setLocal(data.token)
      
      if(data.token){
        router.push("/")
      }
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            router.push("/")
        }
    },[])
  return (
    <>
        {
            !local&&<>
        
                <h1>Login</h1>

                <input type="text" placeholder='enter an email' onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email}/>
                <input type="text" placeholder='enter an password' onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>

                <button onClick={()=>handleSubmit()}>Login</button>:
            </>
        }
    </>
  );
}
