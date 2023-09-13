import React, { FC, useContext, useRef, useState } from "react";
import "./index.scss";
import CarouselBot from "../Carousel_bot";
import CarouselTop from "../Carousel_top";
import { createContext } from "vm";
import { MyPageContext } from "@/components/useContext/setPage";

interface CarouselProps {
  children: React.ReactNode;
}
// type TypePage = {
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
// };

const Carousel: FC<CarouselProps> = ({ children }) => {
  let sliderRef = useRef(null);

  // const [page, setPage] = useState(1);
  // const value = { page, setPage };
  return (
    <MyPageContext>
      <div className="Carousel">
        <CarouselTop sliderRef={sliderRef}>{children}</CarouselTop>
        <CarouselBot sliderRef={sliderRef}></CarouselBot>
      </div>
    </MyPageContext>
  );
};

export default Carousel;
