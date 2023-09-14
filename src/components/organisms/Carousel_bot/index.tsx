import React, { FC, useContext } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
import Progress from "@/components/atoms/progress";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";

interface CarouselBotProps {
  sliderRef: any;
}

const CarouselBot: FC<CarouselBotProps> = ({ sliderRef }) => {
  const { page, setPage } = useContext(PageContext);

  const handlePrev = () => {
    setTimeout(() => {
      if (page !== null) {
        console.log("prev", page);
        setPage(page > 1 ? page - 1 : 4);
        sliderRef.current.slickPrev();
      }
    }, 400);
  };

  const handleNext = () => {
    console.log("next", page);
    setTimeout(() => {
      if (page !== null) {
        setPage(page < 4 ? page + 1 : 1);
        sliderRef.current.slickNext();
      }
    }, 400);
  };
  const t = useTranslation();
  return (
    <div className="Carousel_bot">
      <div className="Carousel_bot__top">
        <Button style="circle" func={() => handlePrev()}>
          <img src="/preslide.svg" alt="" />
        </Button>
        <Button style="circle" func={() => handleNext()}>
          <img src="/nextslide.svg" alt="" />
        </Button>
        <Progress></Progress>
      </div>
      <Link href="./" className="link">
        {t!["carouselBotExplore"]}
      </Link>
    </div>
  );
};

export default CarouselBot;
