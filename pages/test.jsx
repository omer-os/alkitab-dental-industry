import React, { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { GetAllSubjects, GetSpecificSubject } from "../backend/firebase";

export default function Test({ allData }) {
  // useEffect(() => {
  //   console.log(allData);
  // }, []);

  return (
    <div>
      <div className="text-2xl mt-8 font-bold text-center">
        Development pannel
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const allData = await GetAllSubjects();
//   const ids = [];
//   allData.map((i) => {
//     ids.push(i.id);
//   });

//   const ls = [];

//   // const sub = GetSpecificSubject("GxPFbypjhTzEtjk4YXXf")
//   // sub.then((dta)=>{
//   //   console.log(dta.data());
//   // })

  
//   return {
//     props: {
//       allData: allData,
//     },
//     revalidate: 10,
//   };
// };
