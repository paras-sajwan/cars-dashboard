"use client";
import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { jsonData } from "@/app/jsondata";
import TableComponent from "./TableComponent";

export default function TableContainer() {
  const columns = useMemo(
    () => [
      {
        id: "select-col",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        header: "Brand",
        accessorKey: "brand",
      },
      {
        header: "Model",
        accessorKey: "model",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Weight",
        accessorKey: "weight",
      },
      {
        header: "User Ratings",
        accessorKey: "user_ratings.average_rating",
      },
    ],
    []
  );
  const [data, setData] = useState(jsonData);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  console.log(table.getSelectedRowModel().rows); //get full client-side selected rows
  return <TableComponent {...{ table, flexRender }} />;
}
