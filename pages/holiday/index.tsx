import Holiday from "../../component/Holiday/index"
import NavigationPanel from "../../component/Navigation/index"

export default function componentName({data}:any) {
  return (
    <NavigationPanel>
        <Holiday data={data}/>
    </NavigationPanel>
  );
}


export const getServerSideProps = async () =>{

  const url = "http://localhost:3000/api/holidays"
  const response = await fetch(url)
  const data = await response.json()
  return {
    props:{
      data
    }
  }
}