import React from "react";
import { MainLayout } from "../components/Files";

export default function ErrorPage() {
  return <div>ErrorPage</div>;
}
ErrorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
