import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import UseAxiosSecure from "../AxiosHooks/UseAxiosSecure";
import Loader from "../Components/Loader";

const Wishlist = () => {
  const { user } = use(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/myWishlist/${user?.email}`)
      .then((data) => {
        console.log(data?.data);
        setWishlist(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, axiosSecure]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Author",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: wishlist,
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
      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-center text-[#d72050] text-3xl font-bold mb-6">
          My WishListed Blogs
        </h1>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer border px-4 py-2 bg-gray-100"
                    title={header.column.getCanSort() ? "Click to sort" : ""}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <FaArrowCircleUp />,
                      desc: <FaArrowCircleDown />,
                    }[header.column.getIsSorted()] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
