import styles from "./index.module.css"
import {Props, PageProps} from "@/models/Dashboard"

export function List({id, date, title}:Props) {
  return (
    <div className={styles.listContainer}>
        <p>{id}</p>
        <p>{date}</p>
        <p>{title}</p>
    </div>
  );
}
export  function ListHeader({id, date, title}:Props) {
  return (
    <div className={styles.listHeaderContainer}>
        <p>{id}</p>
        <p>{date}</p>
        <p>{title}</p>
    </div>
  );
}


const sort = (a:any,b:any) =>{
  var dateA = new Date(a).getMonth() as any
  var dateB = new Date(b).getMonth() as any
  return  dateA - dateB;
}

export const Page = ({title, data, headerTitle }:PageProps) =>{
  
  const sorted = data && data.sort(function compare(a, b):any {
    let data;
    if(a.dob){
      data = sort(a.dob,b.dob)
    }else if(a.date){
      data = sort(a.date,b.date)
    }
    return data
  });

return(
  <div className={styles.dashboardList}>
      <h3>{title}</h3>
      <div className={styles.dashboardDetails}>
          <ListHeader id="#" title={headerTitle[0]} date={headerTitle[1]}/>

          {
              data && data.length>0?sorted.map((item, index)=>{
                const date =  new Date(item.dob || item.date).toDateString().split(" ")
                if(date&&date[0].includes("Invalid")) return

                  return(
                      <List key={index} id={String(index+1)} title={item.firstName || item.title} date={`${date[2]}-${date[1]}`}/>
                      )

              }):<h1>No Data found</h1>
            }
      </div>
  </div>
)
} 