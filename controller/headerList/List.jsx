import {List} from "./headerList"
import styles from "./index.module.css"

export default function componentName({data}) {

  const FilterList = List.filter(item=>[...data].includes(item.key))
    
  return (
    <div className={styles.filterDataRow}>
        {
          FilterList && FilterList.map((item, index)=>{
            const listType = item.width
            return(
              <p key={index} className={styles[listType]}>{item.title}</p>
            )
          })
        }
    </div>
  );
}
