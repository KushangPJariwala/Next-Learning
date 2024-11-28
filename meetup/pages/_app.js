import Layout from "@/components/layout/Layout";
import Loader from "@/components/ui/loader";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const Context = createContext()

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
  const [allMeetups, setAllMeetups] = useState()
  return (
    <>
      {loading && <Loader />}
      <Context.Provider value={{allMeetups, setAllMeetups}}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
      </Context.Provider>
    </>
  );
}
