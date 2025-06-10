import React from "react";
import { Product } from "../types/ProductType";
import "./scss/product.scss";

const ProductCard = ({ sendItem }: { sendItem: Product }) => {
  const salePrice = sendItem.price * 0.7;

  return (
    <div>
      <div className="img-box">
        <img src={sendItem.image} alt={sendItem.title} />
      </div>
      <div className="text-box">
        <h3>{sendItem.title}</h3>
        <div>
          <strong>30%</strong>
          <div className="price-wrap">
            <span className="sale-price">${salePrice}</span>
            <p className="price">${sendItem.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
