export const callData = async ({page, setBody,title}:any) =>{
    const call = await fetch(`${process.env.BASE_PATH}/${title}?page=${page}`,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await call.json()
    setBody(data)
}