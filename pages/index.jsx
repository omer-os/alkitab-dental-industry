import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function Index({ data }) {
  data["subjects"].map((subject, index) => {
    console.log(subject.icon_img);
  });

  return (
    <div className="flex flex-col justify-center">
      <motion.div
        layout
        className="grid p-10 lg:grid-cols-4 sm:grid-cols-2 auto-rows-[minmax(14em,max-content)] min-h-screen gap-4"
      >
        {/* <motion.div
          layout
          className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col"
        >
          <div className="flex border-b pb-2 border-gray-700 items-center gap-2">
            <div className="img rounded-full w-[3em] h-[3em] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700 ">
              <Image
                src="/icons/material.png"
                width={20}
                height={20}
                layout="intrinsic"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-lg font-bold">Dental Material</div>
              <div className="text-gray-400 text-sm">total 20 malazim</div>
            </div>
          </div>

          <div className="text-gray-400 pt-2 flex-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            eos?
          </div>

          <div className="flex gap-3">
            <Link href="/">
              <a className="text-indigo-400 inline-flex items-center">
                Mlazim
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </motion.div> */}

        {data["subjects"].map((subject, index) => (
          <motion.div
            key={subject.name + index}
            layout
            className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col"
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
                <div className="text-lg font-bold">{subject.name}</div>
                <div className="text-gray-400 text-sm">
                  total {subject.practical.length + subject.theoretical.length}{" "}
                  malazim
                </div>
              </div>
            </div>

            <div className="text-gray-400 pt-2 flex-1">
              {subject.description}
            </div>

            <div className="flex gap-3">
              <Link href={"/" + subject.name.replace(" ", "-")}>
                <a className="text-indigo-400 inline-flex items-center">
                  Mlazim
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export const getStaticProps = async () => {
  
  var data = {
    subjects: [
      {
        name: "dental material",
        icon_img: "/icons/material.png",
        description:
          " the 1500s, when an unknown printer took a galley of it to make a type specimen book. It has survived not only",
        practical: [
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 2",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 2",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
        ],
        theoretical: [
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 2",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "dental anatomy",
        icon_img: "/icons/anatomy.png",
        description:
          "piece of classical Latin literature from 45 BC, making it over 2000 years old",

        practical: [
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
        ],
        theoretical: [
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 2",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 1",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
          {
            file_name: "practical 2",
            file_link:
              "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
          },
        ],
      },
    ],
  };

  if (process.env.NODE_ENV === "development") {
    const url = "http://localhost:3000/data.json";

    let res = await fetch(url);
    data = await res.json();
  }

  return {
    props: {
      data,
    },
  };
};
