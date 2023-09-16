import React, { FC } from "react";
import "./index.scss";
interface ImageProps {
  src: string;
}

const Image: FC<ImageProps> = ({ src }) => {
  return <img data-aos="flip-left" className={`activities-image `} src={src} />;
};

export default Image;
