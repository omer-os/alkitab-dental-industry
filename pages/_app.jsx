import { getDocs } from "firebase/firestore";
import { subjectsCol } from "../backend/firebase";
import { Layout } from "../components/Files";
import "../styles/globals.css";

function MyApp({ Component, pageProps, AllSubjects }) {
  return (
    <Layout>
      <Component {...pageProps} AllSubjects={AllSubjects} />
    </Layout>
  );
}

export default MyApp;

