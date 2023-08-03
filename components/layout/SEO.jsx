import Head from "next/head";
import React from "react";

const SEO = ({ title = "Dolcent" }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content="Make your Dollars and Cents Count" />
  </Head>
);

export default SEO;
