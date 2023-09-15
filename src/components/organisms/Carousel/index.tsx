import React, { FC, useContext, useRef, useState } from "react";
import "./index.scss";
import CarouselBot from "../Carousel_bot";
import CarouselTop from "../Carousel_top";
import { createContext } from "vm";
import { MyPageContext, PageContext } from "@/components/useContext/setPage";

interface CarouselProps {
  children: React.ReactNode;
}
// type TypePage = {
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
// };

const Carousel: FC<CarouselProps> = ({ children }) => {
  let sliderRef = useRef(null);

  return (
    <div className="Carousel">
      <CarouselTop sliderRef={sliderRef}>{children}</CarouselTop>
      <CarouselBot sliderRef={sliderRef}></CarouselBot>
    </div>
  );
};

export default Carousel;
