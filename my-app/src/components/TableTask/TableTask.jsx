import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./TableTask.styled.scss";
import ButtonEdit from "../Edit/ButtonEdit";

function TableTask({ data, handleEdit, handleDelete }) {
  const columnHelper = createColumnHelper();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor("word", {
        id: "Word",
        header: "Word",
        cell: (props) => {
          const value = props.getValue();
          return <p>{value}</p>;
        },
      }),
      columnHelper.accessor("translation", {
        id: "Translation",
        header: "Translation",
        cell: (props) => {
          const value = props.getValue();
          return <p>{value}</p>;
        },
      }),
      columnHelper.accessor("category", {
        id: "Category",
        header: "Category",
        cell: (props) => {
          const value = props.getValue();
          return <p>{value}</p>;
        },
      }),

      columnHelper.accessor("progress", {
        id: "Progress",
        header: "Progress",
        cell: (props) => {
          const value = props.getValue();
          return <p>{value}</p>;
        },
      }),

      columnHelper.accessor("edit", {
        id: "Edit",
        header: "Edit",
        cell: (props) => (
          <ButtonEdit
            onEdit={() => handleEdit(props)}
            onDelete={() => handleDelete(props.row.original.word)}
          />
        ),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    // filterFns: {},
    // state: {
    //   columnFilters,
    // },
    // onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: false,
  });

  return (
    <div className="container-table">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {/* <DebouncedInput
                      type="text"
                      value={header.column.getFilterValue() || ""}
                      onChange={(value) => header.column.setFilterValue(value)}
                      placeholder={`Search...`}
                    /> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2">
        <div className="b-1">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <div className="h-3">
            <h3>Page</h3>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </div>
          <div className="h-4">
            <h3>Go to page:</h3>
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="i-last"
            />
          </div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
        {/* <div>
          <button onClick={() => rerender()}>Force Rerender</button>
        </div> */}
        {/* <div>
          <button onClick={() => refreshData()}>Refresh Data</button>
        </div> */}
        {/* <pre>
        {JSON.stringify(
          { columnFilters: table.getState().columnFilters },
          null,
          2
        )}
      </pre> */}
      </div>
    </div>
  );
}

export default TableTask;
