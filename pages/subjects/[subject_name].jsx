import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// export default function Index({ data }) {
//   const router = useRouter();
//   const { subject_name } = router.query;
//   const [SelectedType, setSelectedType] = useState("practical");

//   return (
//     <div>
//       <div className="capitalize pt-7 w-full text-center text-3xl font-bold">
//         {subject_name && subject_name.replace("-", " ")}
//       </div>

//       <div className="grid gap-5 w-full grid-cols-[minmax(200px,300px)_1fr] auto-rows-max px-10">
//         <div className="top-left-container bg-gray-800 border-gray-700 px-3 rounded-md flex flex-col sticky top-[10em] h-[15em] overflow-y-scroll left-0">
//           <div className="text-lg sticky bg-gray-800 top-0 pt-2 left-0 border-b border-gray-700 font-bold pb-3">
//             Types
//           </div>

//           <div className="py-2 items flex flex-col gap-2">
//             <div
//               onClick={() => setSelectedType("practical")}
//               className="p-2 rounded-xl relative cursor-pointer active:scale-95 transition-all hover:bg-gray-700/40"
//             >
//               Practical
//               {SelectedType === "practical" && (
//                 <motion.div
//                   layoutId="SelectedType"
//                   className="bg-gray-700 z-[-1] w-full h-full absolute top-0 left-0 rounded-xl"
//                 />
//               )}
//             </div>
//             <div
//               onClick={() => setSelectedType("theoretical")}
//               className="p-2 rounded-xl relative"
//             >
//               Theoretical
//               {SelectedType === "theoretical" && (
//                 <motion.div
//                   layoutId="SelectedType"
//                   className="bg-gray-700 z-[-1] w-full h-full absolute top-0 left-0 rounded-xl"
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="right-container grid grid-cols-4 mt-5 auto-rows-[minmax(10em,max-content)] overflow-y-scroll gap-3 h-full">
//           {data[SelectedType].map((file, index) => (
//             <div
//               key={index + "-" + file.file_name}
//               className="border-l-2 border-gray-800 pl-3"
//             >
//               <div className="text-xl font-bold capitalize">
//                 {file.file_name}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   let res = await fetch(process.env.base_url + "/api/data?category=all");
//   const data = await res.json();

//   const paths = data.results.map((dta) => ({
//     params: { subject_name: dta.name },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   let res = await fetch(
//     process.env.base_url + "/api/data?category=" + params.subject_name
//   );
//   const data = await res.json();

//   return {
//     props: { data: data.results[0] },
//   };
// }



import React from 'react'

export default function Sub() {
  return (
    <div>Sub</div>
  )
}

