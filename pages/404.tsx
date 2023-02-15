import {useRouter} from "next/router"

export default function componentName() {
  const router = useRouter()
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",
    flexDirection: "column"}}>
        <h1>404</h1>
        <p>Page not found!!</p>
        <button onClick={()=>router.back()}>Go Back</button>
    </div>
  );
}
