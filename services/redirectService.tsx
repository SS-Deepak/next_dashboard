
export async function Check(context:any) {
    const cookies = context.req.headers.cookie.split(" ");
    const yes = cookies[2]&&cookies[2].includes("employee")
    const path = context.resolvedUrl+"s"
   
    if(yes){
      return{
        redirect: {
          permanent: false,
          destination: path
        },
      }
    }
  }