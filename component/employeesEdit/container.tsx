import styles from "./index.module.css"
import { Input } from "./inputs"

export default function componentName({list, title}:any) {
  return (
    <div className={styles.detailsBox}>
        <h3>{title}</h3>

        <div className={styles.detailsBoxContainer}>
            {
                list.map((item:any, index:number)=>{
                        return <Input item={item} key={index}/>
                })
            }
        </div>
    </div>
  );
}
