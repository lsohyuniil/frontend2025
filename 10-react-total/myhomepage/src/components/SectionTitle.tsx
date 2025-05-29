import React from "react";
import "./scss/Title.scss";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <div>
      <div className="titleBox"></div>
      <h2 className="title">{title}</h2>
      <p className="subTitle">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
