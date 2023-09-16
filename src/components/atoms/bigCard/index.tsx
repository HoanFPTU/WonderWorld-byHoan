import React, { FC } from "react";
import "./index.scss";
interface indexProps {
  style: React.CSSProperties;
}

const BigCard: FC<indexProps> = ({ style }) => {
  return (
    <div className="bigCard">
      <img data-aos="flip-left" priority={true} src="/sanho.svg" alt="" />
    </div>
  );
};

export default BigCard;
