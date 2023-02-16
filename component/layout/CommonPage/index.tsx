import styles from "./index.module.css"
import {GeneralPage, DetailsPage} from "../GeneralBody/index"
import { IndexProps } from "@/models/layout"



export default function index({title, btnTitle, page, header, body, buttons,details, modal,deleteModal, pagination}:IndexProps
) {
  return (
    <div className={styles.EmployeeContainer}>
      <h2>{title}</h2>

      {
        details ? <DetailsPage modal={modal}/> : <GeneralPage
                                                      title={title}
                                                      btnTitle={btnTitle}
                                                      // page={page}
                                                      pagination={pagination}
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
