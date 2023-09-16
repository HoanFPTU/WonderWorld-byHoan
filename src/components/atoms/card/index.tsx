import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
import Image from "next/image";
interface CardProps {
  children?: React.ReactNode;
  href: string;
  src: string;
}

const Card: FC<CardProps> = ({ children, src, href }) => {
  return (
    <div className="divcard">
      <div className={`card `}>
        <Image
          data-aos="flip-left"
          src={src}
          alt=""
          width="0"
          height="0"
          priority
        />
        <Link href={href} className="card__text">
          {children}
        </Link>
      </div>
    </div>
  );
};

export default Card;
