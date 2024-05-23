import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "../../data";
import "./TableTask.styled.scss";
import ButtonEdit from "../Edit/ButtonEdit";
import { useState } from "react";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

function TableTask({ searchValue, category }) {
  // const [columnFilters, setColumnFilters] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleEdit = (props) => {
    const wordValue = props.row.original.Word;
    setSelectedValue(wordValue);
    Confirm.show(
      "Confirm",
      "Do you want to edit?",
      "Yes",
      "No",
      () => {
        Report.warning("Wait for update", "Come back soon", "Okay");
      },
      () => {
        Report.info("Wait for update", "Come back soon", "Okay");
      },
      {}
    );
    console.log("Click on edit", { wordValue });
  };
  const handleDelete = (value) => {
    Confirm.show(
      "Confirm",
      "Do you want to edit?",
      "Yes",
      "No",
      () => {
        Report.warning("Wait for update", "Come back soon", "Okay");
      },
      () => {
        Report.info("Wait for update", "Come back soon", "Okay");
      },
      {}
    );
    console.log("Click on Delete", { value });
  };
  const filteredData = useMemo(() => {
    return DATA.filter((item) => {
      const matchesSearch = item.Word.toLowerCase().includes(
        searchValue.toLowerCase()
      );
      const matchesCategory = category ? item.Category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchValue, category]);

  const columnHelper = createColumnHelper();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor("Word", {
        id: "Word",
        header: "Word",
        cell: (props) => <p>{props.getValue()}</p>,
      }),
      columnHelper.accessor("Translation", {
        id: "Translation",
        header: "Translation",
        cell: (props) => <p>{props.getValue()}</p>,
      }),
      columnHelper.accessor("Category", {
        id: "Category",
        cell: (props) => <p>{props.getValue()}</p>,
      }),

      columnHelper.accessor("Progress", {
        id: "Progress",
        cell: (props) => <p>{props.getValue()}</p>,
      }),

      columnHelper.accessor("Edit", {
        id: "Edit",
        cell: (props) => (
          <ButtonEdit
            onEdit={() => handleEdit(props)}
            onDelete={() => handleDelete(props.row.original.Word)}
          />
        ),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: filteredData,
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
