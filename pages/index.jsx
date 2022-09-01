import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { subjectsCol } from "../backend/firebase";
import { getDocs } from "firebase/firestore";

export default function Index({ allData }) {
  const [Search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center">
      <div className="sm:w-3/6 mx-auto w-full px-10 pt-10">
        <input
          type="text"
          className="p-2 w-full rounded-xl bg-slate-800 text-gray-400 border border-gray-600"
          placeholder="Search For Subjects"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <motion.div
        layout
        className="grid px-10 py-7 xl:grid-cols-4 sm:grid-cols-2 auto-rows-[minmax(15em,max-content)] min-h-screen gap-4"
      >
        <AnimatePresence>
          {allData &&
            JSON.parse(allData)
              .filter((item) =>
                item.name
                  .toLowerCase()
                  .replace("-", " ")
                  .includes(Search.toLowerCase())
              )
              .map((subject, index) => (
                <motion.div
                  animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  key={subject.name + index}
                  layout
                  className="bg-slate-800 border border-gray-700 rounded-xl p-5 flex flex-col"
                >
                  <div className="flex border-b pb-2 border-gray-700 items-center gap-2">
                    <div className="img rounded-full w-[3em] h-[3em] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700 ">
                      <Image
                        src={subject.icon_img}
                        width={20}
                        height={20}
                        layout="intrinsic"
                        alt={"icon of " + subject.name}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-lg font-bold capitalize">
                        {subject.name.replace("-", " ")}
                      </div>
                      <div className="text-gray-400 text-sm">
                        total {subject.files_length} files
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-400 pt-2 flex-1">
                    {subject.description}
                  </div>

                  <div className="flex gap-3">
                    <Link href={"/subjects/" + subject.name.replace(" ", "-")}>
                      <a className="text-indigo-400 flex hover:gap-2 gap-0 transition-all items-center mt-2">
                        All Pdf{"'"}s
                        <div className="relative w-[3em] mt-1 h-8">
                          <Image
                            alt="right arrow"
                            src="/icons/right-arrow.svg"
                            layout="fill"
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export const getStaticProps = async () => {
  // let res = await fetch(process.env.base_url + "/api/data?category=all");
  // const data = await res.json();

  const DocsData = await getDocs(subjectsCol);

  const allData = [];

  DocsData.docs.map((i) => {
    allData.push(i.data());
  });

  return {
    props: {
      allData: JSON.stringify(allData),
    },
    revalidate: 10,
  };
};
