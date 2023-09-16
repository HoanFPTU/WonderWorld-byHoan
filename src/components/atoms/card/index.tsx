import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
interface CardProps {
  children?: React.ReactNode;
  href: string;
  src: string;
}

const Card: FC<CardProps> = ({ children, src, href }) => {
  return (
    <div className="divcard">
      <div className={`card `}>
        <img data-aos="flip-left" priority={true} src={src} />
        <Link href={href} className="card__text">
          {children}
        </Link>
      </div>
    </div>
  );
};

export default Card;
