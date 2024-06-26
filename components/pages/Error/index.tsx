import React from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/shared/Button";

function Error({ statusCode = 500 }) {
  let header = "";
  let desc = "";
  const router = useRouter();

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
      title={`${statusCode} Error - Dolcent`}
      className="mx-auto flex w-full max-w-screen-xl flex-col justify-center px-16"
    >
      <p className="font-semibold text-primary">{statusCode} error</p>
      <h1 className="text-display-xl font-semibold text-gray-900">{header}</h1>
      <p className="text-xl text-gray-600">{desc}</p>
      <Button className="mt-4 w-fit" onClick={() => router.push("/")}>
        Take me home
      </Button>
    </MainLayout>
  );
}

export default Error;
