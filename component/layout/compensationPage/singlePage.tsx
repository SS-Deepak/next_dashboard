import styles from "../CommonPage/index.module.css"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CompensationSingleProps} from "@/models/layout"


export function CompensationAllowences({title}:CompensationSingleProps) {
  return (
    <div className={`${styles.EmployeesList} ${styles.compensation}`}>
        <div className={styles.upperHeader}>
            <h3>{title}</h3>  
            <p><span>+</span> Add</p>    
        </div>

        <div className={styles.lowerData}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Taxable</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Percentage</td>
                        <td>P123</td>
                        <td>Yes</td>
                        <td>5.00% of Basic</td>
                        <td>
                            <p>d</p>
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Fixed</td>
                        <td>ff1</td>
                        <td>No</td>
                        <td>$200.00</td>
                        <td>
                            {/* <p>d</p> */}
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>HRA</td>
                        <td>HRA</td>
                        <td>No</td>
                        <td>$5000.00</td>
                        <td>
                            {/* <p>d</p> */}
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>TA</td>
                        <td>TA</td>
                        <td>No</td>
                        <td>10.00% of Basic</td>
                        <td>
                            <p>d</p>
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>dd</td>
                        <td>dd</td>
                        <td>No</td>
                        <td>$123.00</td>
                        <td>
                            <p>d</p>
                            <p>o</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  );
}
export function CompensationDeductions({title}:CompensationSingleProps) {
  return (
    <div className={`${styles.EmployeesList} ${styles.compensation}`}>
        <div className={styles.upperHeader}>
            <h3>{title}</h3>  
            <p><span>+</span> Add</p>    
        </div>

        <div className={styles.lowerData}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Deduct</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Per</td>
                        <td>sss</td>
                        <td>Pre Tax</td>
                        <td>10.00% of Basic</td>
                        <td>
                            <p>d</p>
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>dd1</td>
                        <td>d2</td>
                        <td>Pre Tax</td>
                        <td>$2.00</td>
                        <td>
                            {/* <p>d</p> */}
                            <p>o</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>TAD</td>
                        <td>TAD</td>
                        <td>Post Tax</td>
                        <td>$100.00</td>
                        <td>
                            <p>d</p>
                            <p>o</p>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
      </div>
  );
}
