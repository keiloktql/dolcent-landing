/* eslint-disable no-unused-vars */
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Button from "../../shared/Button";

function Error({ statusCode = 500 }) {
  let header = "";
  let desc = "";

  switch (statusCode) {
    case 404: {
      header = "We can't find that page";
      desc =
        "Sorry, the page you are looking for doesn't exist or has been moved.";
      break;
    }
    default: {
      header = "An unknown error has occured";
      desc = "Please try again later.";
    }
  }

  return (
    <MainLayout
      title={`${statusCode} Error | Dolcent`}
      className="mx-auto flex w-full max-w-screen-xl flex-col justify-center px-16"
    >
      <p className="font-semibold text-primary">{statusCode} error</p>
      <h1 className="text-display-xl font-semibold text-gray-900">{header}</h1>
      <p className="text-xl text-gray-600">{desc}</p>
      <Button customClassName="mt-4 w-fit">Take me home</Button>
    </MainLayout>
  );
}

export default Error;
