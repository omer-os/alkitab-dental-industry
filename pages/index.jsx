// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// export default function Index({ data }) {
//   return (
//     <div className="flex flex-col justify-center">
//       <motion.div
//         layout
//         className="grid p-10 lg:grid-cols-4 sm:grid-cols-2 auto-rows-[minmax(15em,max-content)] min-h-screen gap-4"
//       >
//         {data.map((subject, index) => (
//           <motion.div
//             key={subject.name + index}
//             layout
//             className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col"
//           >
//             <div className="flex border-b pb-2 border-gray-700 items-center gap-2">
//               <div className="img rounded-full w-[3em] h-[3em] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700 ">
//                 <Image
//                   src={subject.icon_img}
//                   width={20}
//                   height={20}
//                   layout="intrinsic"
//                   alt={"icon of " + subject.name}
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <div className="text-lg font-bold">{subject.name}</div>
//                 <div className="text-gray-400 text-sm">
//                   total {subject.files_length} malazim
//                 </div>
//               </div>
//             </div>

//             <div className="text-gray-400 pt-2 flex-1">
//               {subject.description}
//             </div>

//             <div className="flex gap-3">
//               <Link href={"/subjects/" + subject.name.replace(" ", "-")}>
//                 <a className="text-indigo-400 inline-flex items-center">
//                   All Pdf{"'"}s
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 ml-2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   let res = await fetch(process.env.base_url + "/api/data?category=all");
//   const data = await res.json();

//   return {
//     props: {
//       data: data.results,
//     },
//   };
// };




import React from 'react'

export default function Index() {
  return (
    <div>Index</div>
  )
}
