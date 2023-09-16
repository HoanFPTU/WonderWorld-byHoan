import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
interface ImageProps {
  src: string;
}

const ImageActive: FC<ImageProps> = ({ src }) => {
  return (
    <Image
      className="activities-image"
      src={src}
      alt=""
      width="0"
      height="0"
      priority
    />
  );
};

export default ImageActive;
