import React from "react";
import { HomeLayout } from "../components/Files";

export default function ErrorPage() {
  return <div>ErrorPage</div>;
}
ErrorPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
