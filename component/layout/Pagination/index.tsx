import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import styles from "./index.module.css"
import { PaginationCall } from '@/services/employee';
import { usePaginate } from '../CommonPage/CommonPagePagination';
import { callData } from '@/services/paginate';

export default function TablePaginationDemo({pagination}:any) {
  const [page, setPage] = React.useState(0);
  const {body,setBody,title} = usePaginate() as any

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    callData({page:newPage+1, title, setBody})
  };


  // React.useEffect(()=>{
  //   pagination && PaginationCall({page,setBody})
  //   return ()=>{}
  // },[page])


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