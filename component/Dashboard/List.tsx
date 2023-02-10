import styles from "./index.module.css"
interface Props{
    id: string,
    date: string,
    title: string
}
export interface PageProps{
  title: string,
  data: any[],
  headerTitle: string[]
}

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

export const Page = ({title, data, headerTitle }:PageProps) =>{
  const sorted = data && data.sort(function compare(a, b) {
    var dateA = new Date(a.date) as any
    var dateB = new Date(b.date) as any
    return  dateA - dateB;
  });
  console.log(data)
return(
  <div className={styles.dashboardList}>
      <h3>{title}</h3>
      <div className={styles.dashboardDetails}>
          <ListHeader id="#" title={headerTitle[0]} date={headerTitle[1]}/>

          {
              data.length>0?sorted.map((item, index)=>{
                console.log(index)
                const date =  new Date(item.dob || item.date).toDateString().split(" ")
                if(date&&date[0].includes("Invalid")) return

                  return(
                      <List key={index} id={String(index+1)} title={item.firstname || item.title} date={`${date[2]}-${date[1]}`}/>
                      )

              }):<h1>No Data found</h1>
            }
      </div>
  </div>
)
} 