import NavigationPanel from "../../component/Navigation/index"
import Employees from "../../component/Employees/index"

export default function Home() {
  return (
    <NavigationPanel children={<Employees/>} />
  )
}
