import React, { useState } from "react";
import "./Pagination.css";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({page,handlePageChange}) => {
  

  return (
    <div className="pagination-component">
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "var-(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue)",
            color: "#fff",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey)",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
