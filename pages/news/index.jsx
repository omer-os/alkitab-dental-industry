// import { AnimatePresence } from "framer-motion";
// import React from "react";
// import { Breadcrumbs, Card } from "../../components/Files";

// export default function Index({ data }) {
//   return (
//     <div className="md:px-[13em] sm:px-10 px-5 py-10">
//       <div className="sm:text-center mb-8">
//         <div className="mb-3 sm:text-4xl text-2xl font-bold">Latest News</div>
//         <div className="text-gray-400 text-sm">
//           All the latest news are updated daily by omar chatin.
//         </div>
//         <div className="sm:w-0 transition-all mx-auto mt-5 h-[.1em] mb-2 w-full bg-slate-700"></div>
//       </div>

//       <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
//         <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
//         <div className="my-6">
//           <Breadcrumbs />
//         </div>
//         <div className="space-y-16">
//           <AnimatePresence>
//             {data.map((CardData, index) => (
//               <Card
//                 key={CardData.title + index}
//                 title={CardData.title}
//                 date={CardData.date}
//                 link={CardData.slug}
//                 subtitle={CardData.subtitle}
//               />
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   let res = await fetch(process.env.base_url + "/api/news");
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
