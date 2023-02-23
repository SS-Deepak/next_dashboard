

export const LoginAsUser = async ({data,router}:any) =>{
    const url = `${process.env.BASE_PATH}/as_user`
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    }) as any
    const responseJSON = await response.json()
    console.log(responseJSON)

    if(responseJSON.token){
        const d = new Date();
        d.setTime(d.getTime() + (40*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "userRole" + "=" + "employee" + ";" + expires + ";path=/";

            localStorage.setItem("userToken", responseJSON.token)
            localStorage.setItem("guestUser", JSON.stringify(responseJSON))
            router.push("/")
    }
}