import React, { useState } from "react";
import "./RecommendPage.styled.scss";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "../../data";
import DebouncedInput from "../../components/Debounce/DebouncedInput";

const RecommendPage = () => {
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        id: "Word",
        accessor: "Word",
        Header: "Word",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id: "Translation",
        accessor: "Translation",
        Header: "Translation",
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        id: "Category",
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
        id: "Edit",
        accessor: "Edit",
        Header: "Edit",
        cell: (props) => <p>{props.getValue()}</p>,
      },
    ],
    []
  );
  // const data = DATA(7);
  const [data, setData] = useState(DATA);
  const refreshData = () => setData(DATA);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <div className="container-rec">
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          {/* <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <filter column={header.column} />
                            </div>
                          ) : null} */}
                          <DebouncedInput
                            type="text"
                            value={header.column.getFilterValue() || ""}
                            onChange={(value) =>
                              header.column.setFilterValue(value)
                            }
                            placeholder={`Search...`}
                            
                          />
                        </>
                      )}
                    </th>
                  );
                })}
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
        <div className="h-2" />
        <div className="flex items-center gap-2">
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
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
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
        <div>
          <button onClick={() => refreshData()}>Refresh Data</button>
        </div>
        <pre>
          {JSON.stringify(
            { columnFilters: table.getState().columnFilters },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default RecommendPage;
