export const Login = async ()=>{
    const response = await fetch(`http://localhost:3000/api/employees`,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    const resJson = await response.json()
    return {data: await resJson.data}
  }
  