import Head from "next/head";
import React from "react";

const SEO = ({ title = "Dolcent" }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta
      name="google-site-verification"
      content="4-_73DOGpP5CLWnL8D31ck0ZwEJm5PxgSxS5vjFvtMA"
    />
    <meta name="description" content="Make your Dollars and Cents Count" />
  </Head>
);

export default SEO;
