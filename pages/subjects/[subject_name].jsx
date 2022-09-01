import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "../../components/Files";
import { collection, doc, getDocs } from "firebase/firestore";
import {
  db,
  GetAllSubjects,
  GetSubjectFilesFromSubjectName,
  subjectsCol,
} from "../../backend/firebase";

export default function Index({ data }) {
  const router = useRouter();
  const { subject_name } = router.query;
  const [SelectedType, setSelectedType] = useState("practical");
  const [ShowFilters, setShowFilters] = useState(false);
  const [ShowFiltersButton, setShowFiltersButton] = useState(true);
  const [SearchFilter, setSearchFilter] = useState("");

  return (
    <motion.div
      animate={{
        top: [20, 0],
        opacity: [0, 1],
      }}
    >
      <div
        onWheel={(event) => {
          if (event.nativeEvent.wheelDelta > 0) {
            setShowFiltersButton(true);
          } else {
            setShowFiltersButton(false);
            setShowFilters(false);
          }
        }}
      >
        <div
          className="grid gap-5 w-full 
      sm:grid-cols-[minmax(150px,250px)_1fr] grid-cols-1 auto-rows-max sm:px-10 px-4"
        >
          <motion.div
            className={`bg-slate-800 border-gray-700 px-3 rounded-md hidden sm:flex flex-col h-[15em] overflow-y-scroll sticky left-0 top-20 overflow-hidden transition-all duration-400 w-full`}
          >
            <div className="text-lg sticky bg-slate-800 top-0 pt-2 left-0 border-b border-gray-700 font-bold pb-3">
              Categories
            </div>

            <div className="py-2 items flex flex-col gap-2">
              {["theoretical", "practical"].map((type) => (
                <div
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="p-2 capitalize rounded-xl relative cursor-pointer active:scale-95 transition-all hover:bg-gray-700/40"
                >
                  {type}
                  {SelectedType === type && (
                    <motion.div
                      layoutId="SelectedType"
                      className="bg-gray-700 z-[-1] w-full h-full absolute top-0 left-0 rounded-xl"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <>
            <div className="right-container grid lg:grid-cols-3 md:grid-cols-2 mt-5 auto-rows-max overflow-y-scroll gap-3 pb-5">
              <div className="lg:col-span-3 p-1 sm:col-span-2">
                <input
                  type="text"
                  className="p-2 w-full rounded-xl bg-slate-800 text-gray-400 border border-gray-600"
                  placeholder="Search For Subjects"
                  value={SearchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                />

                <Breadcrumbs links={`${subject_name}/ssss/wwww`} />
              </div>
              <AnimatePresence>
                {data
                  .filter((file) => file.type === SelectedType)
                  .map((file, index) => (
                    <motion.div
                      layout
                      animate={{
                        opacity: [0, 1],
                        scale: [0.8, 1],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      key={index + "-" + file.file_name}
                      className="bg-slate-800 py-4 px-5 rounded-xl flex gap-4"
                    >
                      <div className="text-xl w-[2em] h-[2em] flex items-center justify-center font-bold bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full">
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
                          read time: {file.read_time}m <br />
                          subject type: {file.type}
                        </div>
                        <Link href={file.file_link}>
                          <a className="text-indigo-400 mt-3 hover:gap-2 transition-all gap-0 flex items-center">
                            Read Now
                            <div className="ml-2 mt-2.5">
                              <Image
                                alt="right arrow"
                                src="/icons/right-arrow.svg"
                                width={30}
                                height={30}
                              />
                            </div>
                          </a>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </>
        </div>

        <motion.div
          animate={{
            bottom: ShowFiltersButton ? 20 : -20,
            opacity: ShowFiltersButton ? 1 : 0,
            transition: {
              type: "just",
            },
          }}
          onClick={() => setShowFilters(!ShowFilters)}
          className="fixed cursor-pointer active:scale-95 transition-all active:bg-blue-700 right-4 shadow-xl rounded-full w-[3.5em] h-[3.5em] bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center"
        >
          <Image
            alt="filters icon"
            src="/icons/filters.svg"
            width={30}
            height={30}
          />
        </motion.div>
        <div className="fixed bottom-[5.5em] right-[1.1em] flex flex-col gap-3">
          <motion.div
            animate={{
              bottom: ShowFilters ? 0 : -40,
              opacity: ShowFilters ? 1 : 0,
              transition: {
                delay: 0.05,
              },
            }}
            onClick={() => {
              setShowFilters(false);
              setSelectedType("practical");
            }}
            className="transition-all  bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full w-[3em] h-[3em] flex items-center justify-center"
          >
            <Image
              alt="practical icon"
              src="/icons/practical.svg"
              width={25}
              height={25}
            />
          </motion.div>
          <motion.div
            animate={{
              bottom: ShowFilters ? 0 : -40,
              opacity: ShowFilters ? 1 : 0,
              transition: {
                delay: 0.1,
              },
            }}
            onClick={() => {
              setShowFilters(false);
              setSelectedType("theoretical");
            }}
            className="transition-all bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full w-[3em] h-[3em] flex items-center justify-center"
          >
            <Image
              alt="right theoretical icon"
              src="/icons/theoretical.svg"
              width={25}
              height={25}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const allData = await GetAllSubjects();

  const paths = allData.map((i) => ({
    params: {
      subject_name: i.name,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params, id }) {
  const sub = await GetSubjectFilesFromSubjectName(params.subject_name);

  return {
    props: { data: sub },
  };
}
