import Head from "next/head";
import React from "react";
import { HOST_URL } from "@/config/general";

const SEO = ({
  title = "Dolcent",
  openGraph = {
    ogTitle: "Dolcent",
    ogDescription: "Supercharge your Finance Tracking ⚡",
    ogImage: `${HOST_URL}/android-chrome-192x192.png`,
    ogUrl: HOST_URL
  }
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta
      name="google-site-verification"
      content="4-_73DOGpP5CLWnL8D31ck0ZwEJm5PxgSxS5vjFvtMA"
    />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="Supercharge your Finance Tracking ⚡" />
    <meta property="og:title" content={openGraph.ogTitle} />
    <meta property="og:description" content={openGraph.ogDescription} />
    <meta property="og:image" content={openGraph.ogImage} />
    <meta property="og:url" content={openGraph.ogUrl} />
    <meta name="twitter:card" content="summary" />
  </Head>
);

export default SEO;
