import React, { useMemo } from "react";
// import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DATA from "../../data";
// import { Box } from "@mui/material";
// import { useState } from "react";
import "./Table.styled.scss";
import { useTable } from "react-table";

const Table = ({ searchValue, category, handleChange }) => {
  const filteredData = useMemo(() => {
    return DATA.filter((item) => {
      const matchesSearch = item.Word.toLowerCase().includes(
        searchValue.toLowerCase()
      );
      const matchesCategory = category ? item.Category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchValue, category]);
  console.log(filteredData);

  const columns = useMemo(
    () => [
      {
        id:"Word",
        accessor: "Word",
        Header: "Word",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id:"Translation",
        accessor: "Translation",
        Header: "Translation",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id:"Category",
        accessor: "Category",
        Header: "Category",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id: "Progress",
        accessor: "Progress",
        Header: "Progress",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id:"Edit",
        accessor: "Edit",
        Header: "Edit",
        cell: (props) => <p>{props.getValue()}</p>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData });

  return (
    <table>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th key={column.id}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.id}>
              {row.cells.map((cell) => (
                <td key={cell.column.id}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


export default Table;
