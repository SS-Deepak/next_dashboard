import styles from "./index.module.css"
import {GeneralPage, DetailsPage} from "../GeneralBody/index"

interface Props{
    title?: string,
    btnTitle?: string,
    page?: string,
    header?: string[],
    body?:any,
    buttons?: any,
    details?: boolean,
    modal?:any,
    deleteModal?: any
}


export default function index({title, btnTitle, page, header, body, buttons,details, modal,deleteModal}:Props) {
  
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

      {
        details ? <DetailsPage/> : <GeneralPage
                                      title={title}
                                      btnTitle={btnTitle}
                                      page={page}
                                      header={header}
                                      data={body}
                                      buttons={buttons}
                                      modal={modal}
                                      deleteModal={deleteModal}
                                  />

      }


    </div>
  )
}
