/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";

import ErrorBoundary from "@/components/pages/ErrorBoundary";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
