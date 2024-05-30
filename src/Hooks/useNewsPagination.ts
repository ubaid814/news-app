import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPageSize } from '../store/slices/features/filters';

const useNewsPagination = () => {
    const currentPage = useSelector((state: TReduxState) => state.features.filters.page) - 1;
    const totalPages = useSelector((state: TReduxState) => state.entities.app.totalResults);
    const rowsPerPage = useSelector((state: TReduxState) => state.features.filters.pageSize);

    const dispatch = useDispatch();

    const handlePageChange = (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        dispatch(setPage(page + 1));
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const rowsPerPage = parseInt(event.target.value);
        dispatch(setPageSize(rowsPerPage));
    };

    return {
        rowsPerPage,
        currentPage,
        totalPages,
        handlePageChange,
        handleChangeRowsPerPage,
    };
};

export default useNewsPagination;