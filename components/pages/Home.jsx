import MainLayout from "@/components/layout/MainLayout";
import React, { useState } from "react";

const HomePage = () => {
  const [shiningEffect, setShiningEffect] = useState(true);

  return (
    <MainLayout className="flex justify-center items-center">
      <h1
        onAnimationEnd={() => setShiningEffect(false)}
        className={`font-bold text-display-2xl ${
          shiningEffect ? "shining-effect" : ""
        }`}
      >
        Coming soon.
      </h1>
    </MainLayout>
  );
};

export default HomePage;
