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
  const { numberPage, setNumberPage } = useContext(PageContext);
  const arrhref = ["/", "staff", "active", "service", "/"];
  const handlePrev = () => {
    setTimeout(() => {
      if (numberPage !== null) {
        console.log("prev", numberPage);
        setNumberPage(numberPage > 1 ? numberPage - 1 : 4);
        sliderRef.current.slickPrev();
      }
    }, 500);
  };

  const handleNext = () => {
    setTimeout(() => {
      if (numberPage !== null) {
        setNumberPage(numberPage < 4 ? numberPage + 1 : 1);
        sliderRef.current.slickNext();
      }
    }, 500);
  };
  const t = useTranslation();

  return (
    <div className="Carousel_bot">
      <div className="Carousel_bot__top">
        <Button
          href={
            numberPage !== null && numberPage > 1
              ? arrhref[numberPage - 2]
              : "service"
          }
          style="circle"
          func={() => handlePrev()}
        >
          <img src="/preslide.svg" alt="" />
        </Button>
        <Button
          href={numberPage ? arrhref[numberPage] : "/"}
          style="circle"
          func={() => handleNext()}
        >
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
