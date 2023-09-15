import React from "react";

const DocumentSection = ({ heading, desc }) => {
  return (
    <div className="pt-20">
      <h2 className="font-bold text-display-sm">{heading}</h2>
      <p className="pt-5">{desc}</p>
    </div>
  );
};

export default DocumentSection;
