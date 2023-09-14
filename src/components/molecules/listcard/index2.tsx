import React, { Component, FC, useRef } from "react";
import Slider from "react-slick";

import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/atoms/card";
import { useTranslation } from "@/components/hooks/useTranslation";
interface ListcardProps {
  sliderRef: any;
}

const Listcard: FC<ListcardProps> = ({ sliderRef }) => {
  {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2.6,
      slidesToScroll: 1,
      arrows: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    };
    const t = useTranslation();
    console.log(sliderRef);
    return (
      <div className="widthSlider">
        <Slider ref={sliderRef} {...settings}>
          <Card src="/Card/carouselCardStaff.svg">
            {" "}
            {t!["carouselCardStaff"]}
          </Card>
          <Card src="/Card/carouselCardActivities.svg">
            {" "}
            {t!["carouselCardActivities"]}
          </Card>
          <Card src="/Card/carouselCardProject.svg">
            {" "}
            {t!["carouselCardProject"]}
          </Card>
          <Card src="/Card/carouselCardService.svg">
            {" "}
            {t!["carouselCardService"]}
          </Card>
        </Slider>
      </div>
    );
  }
};
export default Listcard;
