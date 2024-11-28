import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
