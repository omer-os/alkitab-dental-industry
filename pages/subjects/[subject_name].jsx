import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Link from "next/link";

export default function Index({ data }) {
  const router = useRouter();
  const { subject_name } = router.query;
  const [SelectedType, setSelectedType] = useState("practical");

  return (
    <div>
      <div className="capitalize pt-7 w-full text-center text-3xl font-bold">
        {subject_name && subject_name.replace("-", " ")}
      </div>

      <div className="grid gap-5 w-full 
      sm:grid-cols-[minmax(150px,250px)_1fr] grid-cols-1 auto-rows-max px-10">
        <div className="bg-gray-800 border-gray-700 px-3 rounded-md flex flex-col sticky sm:top-20 h-[15em] overflow-y-scroll left-0 
        
        
        
        ">
          <div className="text-lg sticky bg-gray-800 top-0 pt-2 left-0 border-b border-gray-700 font-bold pb-3">
            Types
          </div>

          <div className="py-2 items flex flex-col gap-2">
            <div
              onClick={() => setSelectedType("practical")}
              className="p-2 rounded-xl relative cursor-pointer active:scale-95 transition-all hover:bg-gray-700/40"
            >
              Practical
              {SelectedType === "practical" && (
                <motion.div
                  layoutId="SelectedType"
                  className="bg-gray-700 z-[-1] w-full h-full absolute top-0 left-0 rounded-xl"
                />
              )}
            </div>
            <div
              onClick={() => setSelectedType("theoretical")}
              className="p-2 rounded-xl relative cursor-pointer active:scale-95 transition-all hover:bg-gray-700/40"
            >
              Theoretical
              {SelectedType === "theoretical" && (
                <motion.div
                  layoutId="SelectedType"
                  className="bg-gray-700 z-[-1] w-full h-full absolute top-0 left-0 rounded-xl"
                />
              )}
            </div>
          </div>
        </div>

        <div
          className="right-container grid 
        

        
        lg:grid-cols-3
        md:grid-cols-2

        
        mt-5 auto-rows-max overflow-y-scroll gap-3 h-full"
        >
          {data[SelectedType].map((file, index) => (
            <div
              key={index + "-" + file.file_name}
              className="bg-gray-800 py-4 px-5 rounded-xl flex gap-4"
            >
              <div className="text-xl w-[2em] h-[2em] flex items-center justify-center font-bold bg-blue-700 rounded-full">
                {index + 1}
              </div>
              <div className="mt-1">
                <div className="text-xs text-gray-500">{file.date}</div>
                <div className="text-xl font-bold capitalize">
                  {file.file_name}
                </div>
                <div className="text-gray-400 text-sm capitalize">
                  teacher: {file.teacher_name} <br />
                  pages: {file.pages} <br />
                  estimated read time: {file.read_time}m
                </div>
                <Link href={"/subjects/"}>
                  <a className="text-indigo-400 mt-3 hover:gap-2 transition-all gap-0 flex items-center">
                    Read Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2 mt-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let res = await fetch(process.env.base_url + "/api/data?category=all");
  const data = await res.json();

  const paths = data.results.map((dta) => ({
    params: { subject_name: dta.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let res = await fetch(
    process.env.base_url + "/api/data?category=" + params.subject_name
  );
  const data = await res.json();

  return {
    props: { data: data.results[0] },
  };
}
