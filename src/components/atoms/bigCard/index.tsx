import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
interface indexProps {
  style: React.CSSProperties;
}

const BigCard: FC<indexProps> = ({ style }) => {
  return (
    <div className="bigCard">
      <Image
        data-aos="flip-left"
        src="/sanho.svg"
        alt=""
        width="0"
        height="0"
        priority
      />
    </div>
  );
};

export default BigCard;
