import React from "react";
import { useReactTable } from "@tanstack/react-table";

const Table = () => {
    const table = useReactTable({
        data
    });
  return (
    <>
      <p>Table</p>
    </>
  );
};

export default Table;
