import React, { useMemo } from "react";
// import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DATA from "../../data";
// import { Box } from "@mui/material";
// import { useState } from "react";
import "./Table.styled.scss";
import { useTable } from "react-table";

const Table = ({ searchValue, category }) => {
    const filteredData = useMemo(() => {
      return DATA.filter((item) => {
        const matchesSearch = item.Word.toLowerCase().includes(
          searchValue.toLowerCase()
        );
        const matchesCategory = category ? item.Category === category : true;
        return matchesSearch && matchesCategory;
      });
    }, [searchValue, category]);

  // const data = useMemo(() => DATA, []);
  const columns = useMemo(
    () => [
      {
        accessor: "Word",
        Header: "Word",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessor: "Translation",
        Header: "Translation",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessor: "Category",
        Header: "Category",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessor: "Progress",
        Header: "Progress",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessor: "Edit",
        Header: "Edit",
        cell: (props) => <p>{props.getValue()}</p>,
      },
    ],
    []
  );

  // const [data, setData] = useState(DATA);
  // const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });
  // console.log(table.getHeaderGroups());

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;