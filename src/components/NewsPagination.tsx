import React from "react";
import Pagination from "./common/Pagination";
import useNewsPagination from "../Hooks/useNewsPagination";

const NewsPagination: React.FC = () => {
  const {
    totalPages,
    currentPage,
    rowsPerPage,
    handleChangeRowsPerPage,
    handlePageChange,
  } = useNewsPagination();

  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      onChangePage={handlePageChange}
    />
  );
};

export default NewsPagination;
