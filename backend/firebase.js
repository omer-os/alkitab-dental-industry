import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4NwvR2uYMAMGZk4t-IntEm5-ezLY1Zw4",
  authDomain: "twitterclone-b8036.firebaseapp.com",
  databaseURL: "https://twitterclone-b8036-default-rtdb.firebaseio.com",
  projectId: "twitterclone-b8036",
  storageBucket: "twitterclone-b8036.appspot.com",
  messagingSenderId: "13930404191",
  appId: "1:13930404191:web:2c4f7c6f88c939c8e1feea",
  measurementId: "G-0NHX1DCGV0",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const subjectsCol = collection(db, "subjects");

export const GetAllSubjects = async () => {
  const DocsData = await getDocs(subjectsCol);

  var allData = [];

  DocsData.docs.map((i) => {
    const itemDta = {
      name: i.data().name,
      description: i.data().description,
      icon_img: i.data().icon_img,
      id: i.id,
    };
    allData.push(itemDta);
  });

  return allData;
};

export const GetSpecificSubject = async (subjectId) => {
  // const data = await getDoc();
  const subCol = collection(doc(db, "subjects/" + subjectId), "practical");
  const DocsData = await getDocs(subCol);

  var allData = [];

  DocsData.docs.map((i) => {
    allData.push(i.data());
  });

  return allData;
};

export const GetSubjectFilesFromSubjectName = async (subjectName) => {
  const q = query(subjectsCol, where("name", "==", subjectName));
  const ref = await getDocs(q);

  const colRef = collection(doc(db, "subjects/" + ref.docs[0].id), "files");

  const allFiles = await getDocs(colRef);

  let ls = [];

  allFiles.docs.map((i) => {
    ls.push(i.data());
  });

  return ls;
};

// const data = [
//   {
//     name: "dental-material",
//     icon_img: "/icons/material.png",
//     description:
//       "Dental materials include the natural tissues (enamel, dentin, other intraoral tissues) and biocompatible synthetic materials (metals, ceramics, etc...) used to restore decayed, damaged, or fractured teeth.",
//     files: [
//       {
//         file_name: "Weescap",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Alma Mendez",
//         read_time: 10,
//         type: "practical",
//       },
//       {
//         file_name: "Efeifigo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Linnie Ingram",
//         read_time: 15,
//         type: "theoretical",
//       },
//     ],
//   },
//   {
//     name: "dental-anatomy",
//     icon_img: "/icons/anatomy.png",
//     description:
//       "field of anatomy dedicated to the study of human tooth structures. The development, appearance, and classification of teeth fall within its purview.",

//     files: [
//       {
//         file_name: "Weescap",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Alma Mendez",
//         read_time: 10,
//         type: "practical",
//       },
//       {
//         file_name: "Efeifigo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Linnie Ingram",
//         read_time: 15,
//         type: "theoretical",
//       },
//     ],
//   },
// ];

// adding subjects :

// data.map((subject) => {
//   addDoc(collection(db, "subjects"), {
//     name: subject.name,
//     icon_img: subject.icon_img,
//     description: subject.description,
//   });
// });

// adding fils :

// data.map(async (sub) => {
//   const q = query(subjectsCol, where("name", "==", sub.name));
//   const DocRef = await getDocs(q);

//   const colRef = collection(doc(db, "subjects/" + DocRef.docs[0].id), "files");
//   sub.files.map((file) => {
//     addDoc(colRef, file);
//   });
// });
