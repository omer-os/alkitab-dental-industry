import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
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

const db = getFirestore(app);
export const subjectsCol = collection(db, "subjects");

// const data = [
//   {
//     name: "dental-material",
//     icon_img: "/icons/material.png",
//     description:
//       "Dental materials include the natural tissues (enamel, dentin, other intraoral tissues) and biocompatible synthetic materials (metals, ceramics, etc...) used to restore decayed, damaged, or fractured teeth.",
//     practical: [
//       {
//         file_name: "Weescap",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Alma Mendez",
//         read_time: 10,
//       },
//     ],
//     theoretical: [
//       {
//         file_name: "Efeifigo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Linnie Ingram",
//         read_time: 15,
//       },
//     ],
//   },
//   {
//     name: "dental-anatomy",
//     icon_img: "/icons/anatomy.png",
//     description:
//       "field of anatomy dedicated to the study of human tooth structures. The development, appearance, and classification of teeth fall within its purview.",

//     practical: [
//       {
//         file_name: "Pusjojo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Blanche Poole",
//         read_time: 42,
//       },
//       {
//         file_name: "Folgiwor",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Janie Swanson",
//         read_time: 46,
//       },
//       {
//         file_name: "Tunopic",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Ellen Carroll",
//         read_time: 99,
//       },
//       {
//         file_name: "Zuzowki",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Kyle Wagner",
//         read_time: 40,
//       },
//       {
//         file_name: "Jonrarezo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Lula Gibson",
//         read_time: 69,
//       },
//       {
//         file_name: "Pulami",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Rachel McDaniel",
//         read_time: 67,
//       },
//       {
//         file_name: "Ipasigvo",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Jeff Wood",
//         read_time: 26,
//       },
//       {
//         file_name: "Taocbul",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Lawrence Allen",
//         read_time: 55,
//       },
//       {
//         file_name: "Evomutsuv",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Essie Lucas",
//         read_time: 19,
//       },
//       {
//         file_name: "Darobsab",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Craig Murphy",
//         read_time: 33,
//       },
//       {
//         file_name: "Pojwahmu",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Arthur Moody",
//         read_time: 70,
//       },
//       {
//         file_name: "Cevufsob",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Shane Chandler",
//         read_time: 67,
//       },
//       {
//         file_name: "Onuogki",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Emma Bell",
//         read_time: 15,
//       },
//     ],
//     theoretical: [
//       {
//         file_name: "Rawwivse",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Mable Cox",
//         read_time: 73,
//       },
//       {
//         file_name: "practical 2",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Donald Daniel",
//         read_time: 34,
//       },
//       {
//         file_name: "Ezzovew",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Alejandro Morgan",
//         read_time: 32,
//       },
//       {
//         file_name: "practical 2",
//         file_link:
//           "https://docs.google.com/presentation/d/1rk8EtgfDYsvWMzJ2x_18MUPeRFam-TZW/edit?usp=sharing&ouid=104126981857640714955&rtpof=true&sd=true",
//         teacher_name: "Lester Bryant",
//         read_time: 99,
//       },
//     ],
//   },
// ];

// data.map((item, index) => {
//   addDoc(subjectsCol, {
//     name: item.name,
//     icon_img: item.icon_img,
//     description: item.description,
//   });
// });

// getDocs(subjectsCol).then((snap) => {
//   snap.forEach((item) => {
//     // item.id
//     const docRef = doc(db, "subjects", item.id);
//     const practicalCollection = collection(docRef, "practical");
//     const theoreticalCollection = collection(docRef, "theoretical");
//     const selectedData = data.filter((i) => i.name === item.data().name)[0];

//     selectedData.practical.forEach((i) => {
//       addDoc(practicalCollection, i);
//     });
//     selectedData.theoretical.forEach((i) => {
//       addDoc(theoreticalCollection, i);
//     });
//   });
// });

// const docRef = doc(db, "subjects", "test")
// const docSnap = getDoc(docRef)
// docSnap.then((data)=>{
//     console.log(data.data());
// })













// for index.jsx page

// const allSubjectsRef = getDocs(subjectsCol)
// const allSubjects = []
// allSubjectsRef.then((snap)=>snap.forEach((i)=>allSubjects.push(i)))


// export {allSubjects}








