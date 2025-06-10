import React from "react";
import Title from "../components/Title";
import CategoryPage from "../components/CategoryPage";

const Jewelry = () => {
  return (
    <div className="container">
      <div>
        <img src="./images/jewelery-sub-banner.jpg" alt="" />
      </div>
      <div className="container-inner">
        <Title title="보석" />
        <CategoryPage categoryName="jewelery" />
      </div>
    </div>
  );
};

export default Jewelry;
