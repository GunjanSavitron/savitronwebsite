// pages/_app.tsx
import "../styles/globals.css";
import AppLayout from "@amitkk/basic/utils/layouts/AppLayout";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loader from "@amitkk/basic/static/Loader";

type PageWithLayout = React.ComponentType<any> & { noLayout?: boolean };

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const noLayout = (Component as PageWithLayout).noLayout === true;

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    const timer = setTimeout(() => setLoading(false), 600);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
      clearTimeout(timer);
    };
  }, [router]);

  if (noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      {loading && <Loader />}
      <AppLayout meta={pageProps.meta}>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
