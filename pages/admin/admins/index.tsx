import NavigationPanel from "../../../component/Navigation/index"
import AdminsList from "../../../component/adminsList/index"

export default function Index(){
  return (
      <NavigationPanel children={<AdminsList/>} />
  )
}
