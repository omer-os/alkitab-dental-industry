import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../../backend/firebase";
import Layout from "../../components/admin/layout";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return router.push("/login");
      }
    });
  }, []);

  return <div>Admin Pannel</div>;
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
