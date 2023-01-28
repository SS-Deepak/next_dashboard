import React from 'react';
import Header from "../../component/Header/index"
import SidePanel from "../../component/sidePanel/index"
import styles from "./index.module.css"
import {Toggler} from "../../Context/headerToggle"

export default function componentName({children}) {
  return (
    <Toggler>
      <div className={styles.navigator}>
        <SidePanel/>

        <div className={styles.navigatorContainer}>
          <Header/>
          <div className={styles.mainResponse}>
              {children}
          </div>
        </div>

      </div>
    </Toggler>
  );
}
