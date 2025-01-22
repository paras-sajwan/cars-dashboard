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
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return <TableComponent {...{table, flexRender}} />;
}
