import styles from "./index.module.css"
interface Props{
    id: string,
    date: string,
    title: string
}


export default function componentName({id, date, title}:Props) {
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
