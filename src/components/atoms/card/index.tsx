import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
interface CardProps {
  children?: React.ReactNode;

  src: string;
}

const Card: FC<CardProps> = ({ children, src }) => {
  return (
    <div className="divcard">
      <div className={`card `}>
        <img src={src} />
        <Link href="./" className="card__text">
          {children}
        </Link>
      </div>
    </div>
  );
};

export default Card;
