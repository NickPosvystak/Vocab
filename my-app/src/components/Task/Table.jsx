import React, { useMemo } from "react";
// import { flexRender, getCoreRowModel } from "@tanstack/react-table";
// import DATA from "../../data";
// import { Box } from "@mui/material";
// import { useState } from "react";
import "./Table.styled.scss";
import fakeData from "../../FAKE_DATA.json";
import { useTable } from "react-table";

const Table = () => {
   const data = useMemo(() => fakeData, []);
   const columns = useMemo(
     () => [
       {
         Header: "ID",
         accessor: "id",
       },
       {
         Header: "First Name",
         accessor: "first_name",
       },
       {
         Header: "Last Name",
         accessor: "last_name",
       },
       {
         Header: "Email",
         accessor: "email",
       },
       {
         Header: "Gender",
         accessor: "gender",
       },
       {
         Header: "University",
         accessor: "university",
       },
     ],
     []
   );
  // const data = React.useMemo(() => DATA, []);
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       accessor: "Word",
  //       header: "Word",
  //       cell: (props) => <p>{props.getValue()}</p>,
  //     },
  //     {
  //       accessor: "Translation",
  //       header: "Translation",
  //       cell: (props) => <p>{props.getValue()}</p>,
  //     },
  //     {
  //       accessor: "Category",
  //       header: "Category",
  //       cell: (props) => <p>{props.getValue()}</p>,
  //     },
  //     {
  //       accessor: "Progress",
  //       header: "Progress",
  //       cell: (props) => <p>{props.getValue()}</p>,
  //     },
  //     {
  //       accessor: "Edit",
  //       header: "Edit",
  //       cell: (props) => <p>{props.getValue()}</p>,
  //     },
  //   ],
  //   []
  // );

  // const [data, setData] = useState(DATA);
  // const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });
  // console.log(table.getHeaderGroups());

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr  {...headerGroup.getHeaderGroupProps()}key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}key={column.id} >
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
                <tr  {...row.getRowProps()}key={row.id}>
                  {row.cells.map((cell) => (
                    <td  {...cell.getCellProps()}key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
