import React from "react";
import { Breadcrumbs } from "../../components/Files";

export default function LinkNewsComponent({ data }) {
  return <div>news id : {data[0].slug}</div>;
}

export async function getStaticPaths() {
  let res = await fetch(process.env.base_url + "/api/news");
  const data = await res.json();

  const paths = data.results.map((dta) => ({
    params: { news_id: dta.slug },
  }));


  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let res = await fetch(process.env.base_url + "/api/news/" + params.news_id);
  const data = await res.json();

  return {
    props: { data: data.results[0] },
  };
}
