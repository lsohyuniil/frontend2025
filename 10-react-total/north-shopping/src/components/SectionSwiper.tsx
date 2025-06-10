import React from "react";
import { Product } from "../types/ProductType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const SectionSwiper = ({ category }: { category: Product[] }) => {
  return (
    <div className="goods-list">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={4}
        spaceBetween={24}
      >
        {category.map((item) => (
          <SwiperSlide>
            <Link to={`/products/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSwiper;
