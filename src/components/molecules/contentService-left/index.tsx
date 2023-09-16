import React, { FC } from "react";
import "./index.scss";
import EventTitle from "@/components/atoms/eventTitle";
import EventDetail from "@/components/atoms/enentDetail";
import OrderCard from "@/components/atoms/orderCard";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
interface indexProps {}

const ContentServiceLeft: FC<indexProps> = () => {
  const t = useTranslation();
  return (
    <div className="contentService">
      <div className="contentService-wrap">
        <EventTitle content={t!["projectItemLeftTitle"]}>
          <OrderCard content="01" position="left" />
        </EventTitle>
        <EventDetail content={t!["projectItemLeftDetail"]} />
        <div className="icon">
          <Link href="#">{t!["projectItemUpdating"]}</Link>
          <img
            data-aos="flip-left"
            priority={true}
            src="/arrow_downward_24px.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContentServiceLeft;
