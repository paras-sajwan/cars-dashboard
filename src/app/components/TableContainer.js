"use client";
import { useState, useMemo, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { jsonData } from "@/app/jsondata";

export default function TableContainer({ setComparisonData }) {
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
  const [rowSelection, setRowSelection] = useState({});
  const [limitReached, setlimitReached] = useState(false);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    enableSelectAll: false,
    onRowSelectionChange: (data) => {
      const selectedRowCount = Object.values(data()).filter(
        (value) => value
      )[0];
      if (limitReached) {
        if (!selectedRowCount) {
          setRowSelection(data);
        } else {
          alert("You can select upto 3 for comparison");
        }
      } else {
        setRowSelection(data);
      }
    },
    state: { rowSelection },
  });

  useEffect(() => {
    if (Object.keys(rowSelection).length >= 3) {
      setlimitReached(true);
    } else {
      setlimitReached(false);
    }
    setComparisonData(rowSelection);
  }, [rowSelection]);

  return <MaterialReactTable table={table} />;
}
