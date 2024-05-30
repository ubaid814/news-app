import React from 'react';
import TablePagination from '@mui/material/TablePagination';

interface PaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    count,
    page,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
}) => {
    return (
        <TablePagination
            component="div"
            count={count}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            labelRowsPerPage="News per page:"
        />
    );
};

export default Pagination;