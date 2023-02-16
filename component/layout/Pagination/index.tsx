import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import styles from "./index.module.css"
import { PaginationCall } from '@/services/employee';

export default function TablePaginationDemo({pagination}:any) {
  const [page, setPage] = React.useState(0);
  const {body,setBody} = pagination.callPaging() as any

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  React.useEffect(()=>{
    pagination && PaginationCall({page,setBody})
    return ()=>{}
  },[page])


   return (
    <table className={styles.paginationContainer}>
        {
            pagination.paging && 
            <tbody>
            <tr>
                <td className={styles.rowPerPage}>Row per Page: {pagination.paging.limit}</td>

                <TablePagination
                    count={pagination.paging.totalRecords}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={pagination.paging.limit}
                    //   onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage=""
                    rowsPerPageOptions={[]}
                    showFirstButton
                    showLastButton
                />
            </tr>
            </tbody>
}
    </table>
  );
}