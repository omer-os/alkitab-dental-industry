import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../../backend/firebase";
import Layout from "../../components/admin/layout";
import CardContainer from "../../components/home/CardContainer";

const columns = [
  { field: "id", headerName: "num", width: 50 },
  {
    field: "title",
    headerName: "title",
    width: 100,
    editable: true,
  },
  // {
  //   field: "lastName",
  //   headerName: "Last name",
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 110,
  //   editable: true,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  { id: 1, title: "Snow", firstName: "Jon", age: 35 },
  { id: 2, title: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, title: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, title: "Stark", firstName: "Arya", age: 16 },
  { id: 5, title: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, title: "Melisandre", firstName: null, age: 150 },
  { id: 7, title: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, title: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, title: "Roxie", firstName: "Harvey", age: 65 },
];
const subjects = [
  {
    link: "/admin/s",
    title: "dental material",
    subtitle:
      "io ab, aliquam fugit excepturi asperiores minus recusandae nisi doloremque, tenetur.",
    files: 12,
    slug: "dental-material",
    img: "https://static8.depositphotos.com/1571889/1059/i/450/depositphotos_10594224-stock-photo-dental-tools-in-blue.jpg",
  },
  {
    link: "/admin/s",
    title: "dental anatomy",
    subtitle:
      "am porro assumenda repellendus est delectus et, commodi ipsum explicabo voluptatem a blanditiis.",
    files: 10,
    slug: "dental-anatomy",
    img: "https://t3.ftcdn.net/jpg/03/87/25/28/360_F_387252880_hE0QVHOJ6bZE3cUCYCiaYTTb1WADsdlQ.jpg",
  },
  {
    link: "/admin/s",
    title: "prosthodontics",
    subtitle:
      "quaerat, possimus asperiores ad doloremque debitis modi saepe eveniet, repellendus eius! Harum eveniet unde necessitatibus provident minima nobis magnam aspernatur susc.",
    files: 23,
    slug: "prosthodontics",
    img: "https://c1.wallpaperflare.com/preview/289/347/808/zahnreinigung-dental-repairs-treat-teeth-brushing-teeth.jpg",
  },
];

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return router.push("/login");
      }
    });
  }, []);

  return (
    <div className="py-3 px-5">
      <div className="grid gap-3 sm:grid-cols-6 grid-cols-2 auto-rows-max">
        <div className="flex flex-col bg-zinc-900 p-3 rounded-xl">
          <div className="text-zinc-400">Total Subjects</div>
          <div className="text-4xl font-bold">6</div>
        </div>
        <div className="flex flex-col bg-zinc-900 p-3 rounded-xl">
          <div className="text-zinc-400">Total Files</div>
          <div className="text-4xl font-bold">60</div>
        </div>
        <div className="flex flex-col bg-zinc-900 p-3 rounded-xl">
          <div className="text-zinc-400">Total Subjects</div>
          <div className="text-4xl font-bold">6</div>
        </div>
        <div className="flex flex-col bg-zinc-900 p-3 rounded-xl">
          <div className="text-zinc-400">Total Files</div>
          <div className="text-4xl font-bold">60</div>
        </div>
      </div>
      <br />
      {/* <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box> */}
      <CardContainer subjects={subjects} />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
