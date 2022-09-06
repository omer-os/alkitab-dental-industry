import {
  Typography,
  Snackbar,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  CardActionArea,
  Divider,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { MainLayout } from "../components/Files";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { blue } from "@mui/material/colors";
import { motion } from "framer-motion";
import Link from "next/link";
import CardContainer from "../components/home/CardContainer";
import LastestBlogs from "../components/home/LastestBlogs";

const subjects = [
  {
    link: "/subjects/dental-material",
    title: "dental material",
    subtitle:
      "io ab, aliquam fugit excepturi asperiores minus recusandae nisi doloremque, tenetur.",
    files: 12,
    slug: "dental-material",
    img: "https://static8.depositphotos.com/1571889/1059/i/450/depositphotos_10594224-stock-photo-dental-tools-in-blue.jpg",
  },
  {
    link: "/subjects/dental-anatomy",
    title: "dental anatomy",
    subtitle:
      "am porro assumenda repellendus est delectus et, commodi ipsum explicabo voluptatem a blanditiis.",
    files: 10,
    slug: "dental-anatomy",
    img: "https://t3.ftcdn.net/jpg/03/87/25/28/360_F_387252880_hE0QVHOJ6bZE3cUCYCiaYTTb1WADsdlQ.jpg",
  },
  {
    link: "/subjects/prosthodontics",
    title: "prosthodontics",
    subtitle:
      "quaerat, possimus asperiores ad doloremque debitis modi saepe eveniet, repellendus eius! Harum eveniet unde necessitatibus provident minima nobis magnam aspernatur susc.",
    files: 23,
    slug: "prosthodontics",
    img: "https://c1.wallpaperflare.com/preview/289/347/808/zahnreinigung-dental-repairs-treat-teeth-brushing-teeth.jpg",
  },
];

export default function Index() {
  return (
    <div className="py-4 px-6">
      <Typography variant="h1">All Categories</Typography>
      <CardContainer subjects={subjects} />
      <Divider className="mt-8" sx={{ height: 3 }} />

      <LastestBlogs />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
