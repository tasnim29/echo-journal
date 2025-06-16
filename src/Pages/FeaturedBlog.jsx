import React, { use, useEffect, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import axios from "axios";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";

const FeaturedBlog = () => {
  const { theme } = use(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("https://assignment-11-server-delta-nine.vercel.app/topBlogs")
      .then((data) => {
        console.log(data?.data);
        setBlogs(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [sorting, setSorting] = useState([]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor("name", {
      header: "Author",
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
  ];

  const table = useReactTable({
    data: blogs,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="max-w-7xl mx-auto my-20 px-4">
        <div className="mb-6">
          <h1
            className={`text-2xl md:text-5xl font-bold text-center mb-3 ${
              theme === "dark" ? "text-yellow-500" : "text-[#d72050]"
            }`}
          >
            Featured Blogs
          </h1>
          <p className="text-center text-gray-400 font-semibold">
            You can click on the column headers to sort in ascending or
            descending order!!
          </p>
        </div>

        {/* Responsive table wrapper */}
        <div className="overflow-x-auto">
          <table
            className={`min-w-full table-auto text-sm border ${
              theme === "dark"
                ? "border-gray-700 bg-gray-900 text-gray-100"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className={`cursor-pointer border px-4 py-2 whitespace-nowrap ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-100 border-gray-300"
                      }`}
                      title={header.column.getCanSort() ? "Click to sort" : ""}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <FaArrowCircleUp />,
                          desc: <FaArrowCircleDown />,
                        }[header.column.getIsSorted()] ?? ""}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`${
                    theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`border px-4 py-2 whitespace-nowrap truncate max-w-xs ${
                        theme === "dark" ? "border-gray-700" : "border-gray-300"
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
