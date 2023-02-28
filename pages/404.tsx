import {useRouter} from "next/router"
import Image from "next/image";
import { Button } from "@mui/material";
// import Pic from "assets/Images/notFound.PNG"

export default function componentName() {
  const router = useRouter()
  return (
    <div className="notFoundContainer">
        <h1>404</h1>
        <h3>Page not found!</h3>
        {/* <Image src={Pic} width={800} height={800} alt="404"/> */}
        <Button variant="contained" onClick={()=>router.back()}>Go Back</Button>
    </div>
  );
}
