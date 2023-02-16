export const Login = async ()=>{
    const response = await fetch(`${process.env.BASE_PATH}/employees`,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    const resJson = await response.json()
    return {data: await resJson.data}
  }
  