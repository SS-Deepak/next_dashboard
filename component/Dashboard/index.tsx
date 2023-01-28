import List,{ListHeader} from "./List"
import styles from "./index.module.css"

export default function index() {
  return (
    <div className={styles.dashboardContainer}>
        <h1>Dashboard</h1>
        <div className={styles.dashboardData}>
            <div className={styles.dashboardList}>
                <h3>Upcoming Employee's Birthday</h3>
                <div className={styles.dashboardDetails}>

                    <ListHeader id="#" title="Name" date="Birthday"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                </div>
            </div>
            <div className={styles.dashboardList}>
                <h3>Upcoming Holiday</h3>
                <div className={styles.dashboardDetails}>
                    <ListHeader id="#" title="Title" date="Date"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                    <List id="1" title="Kamla Rout" date="10-Febuary"/>
                </div>
            </div>
        </div>

        
    </div>
    
  )
}
